// KANYA order backend: paste into a Google Sheet's Apps Script (see README.md).
// For every order it saves a row in the "Orders" tab, creates a Word order slip (.docx) saved in the Drive
// folder "KANYA Order Slips", and emails you the order with the Word file attached.
// It also signs PayHere card payments and records PayHere's payment result (Paid / Failed / Cancelled).

const SITE_KEY = 'kj-bae1ee88b9aa61b633125122'; // must match siteKey in src/config.js
const SITE_URL = 'https://kanyajewellers.com';
const SHEET_NAME = 'Orders';
const DATA_SHEET = 'OrderData';
const SLIP_FOLDER = 'KANYA Order Slips';
const STATUS_COL = 3;
const SLIP_COL = 16;
const HEADERS = [
  'Received', 'Order no.', 'Status', 'Name', 'Phone', 'Email', 'Address', 'City',
  'Postal code', 'Payment', 'Items', 'Subtotal', 'Shipping', 'Total', 'Notes', 'Order slip (Word)',
];

function props() {
  return PropertiesService.getScriptProperties();
}

// The Merchant ID is not secret (the Merchant Secret is, and only lives in the script property PAYHERE_SECRET).
// Set the script property PAYHERE_MERCHANT_ID to override this default, for example with the live ID.
function merchantId_() {
  return props().getProperty('PAYHERE_MERCHANT_ID') || '1239144';
}

function doPost(e) {
  try {
    // PayHere reports the result of a card payment as a form post
    if (e.parameter && e.parameter.md5sig && e.parameter.merchant_id) return handlePayhereNotify(e.parameter);

    const order = JSON.parse(e.postData.contents);
    if (order.siteKey !== SITE_KEY) return reply({ ok: false });
    if (!order.orderNumber || !order.customer || !Array.isArray(order.items) || order.items.length === 0 || order.items.length > 50) {
      return reply({ ok: false });
    }

    if (order.action === 'payhere-start') return startCardPayment(order);

    // Bank transfer / WhatsApp orders: flag the row if the prices do not match the real price list
    const priceOk = verifyPrices(order);
    finishOrder(order, priceOk === false ? 'Check prices' : 'New', false);
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

// The customer's "payment return" page asks for the status of its order (nothing personal is returned)
function doGet(e) {
  const number = e && e.parameter && e.parameter.order;
  if (!number) {
    getSheet(); // makes sure the orders sheet exists (the first visit creates it in the owner's Drive)
    return reply({ ok: true, service: 'kanya-orders' });
  }
  const sheet = getSheet();
  const row = findOrderRow(sheet, String(number));
  return reply({ ok: true, status: row ? String(sheet.getRange(row, STATUS_COL).getValue()) : 'Unknown' });
}

// ---- order saving and emails -------------------------------------------------------------------

function itemsText(order) {
  return order.items.map((i) => i.qty + ' x ' + i.name + ' (' + i.id + ') @ ' + i.unitPrice).join('\n');
}

function appendOrderRow(order, status, slipUrl) {
  const c = order.customer;
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    getSheet().appendRow([
      new Date(), order.orderNumber, status, c.name, c.phone, c.email, c.address, c.city,
      c.postalCode, order.payment, itemsText(order), order.subtotal, order.shipping, order.total, c.notes,
      slipUrl || '',
    ].map(clean));
  } finally {
    lock.releaseLock();
  }
}

function sendOrderEmails(order, slip, paid) {
  const c = order.customer;
  const summary =
    'Order ' + order.orderNumber + (paid ? '  (PAID by card)' : '') + '\n' +
    'Name: ' + c.name + '\nPhone: ' + c.phone + (c.email ? '\nEmail: ' + c.email : '') + '\n' +
    'Address: ' + c.address + ', ' + c.city + ' ' + (c.postalCode || '') + '\n' +
    'Payment: ' + order.payment + '\n\n' + itemsText(order) + '\n\n' +
    'Subtotal: Rs. ' + order.subtotal + '\nShipping: Rs. ' + order.shipping + '\nTotal: Rs. ' + order.total +
    (c.notes ? '\n\nNotes: ' + c.notes : '');
  const attachments = slip ? [slip.blob] : [];

  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    subject: (paid ? 'PAID - ' : '') + 'New KANYA order ' + order.orderNumber + ' - Rs. ' + order.total,
    body: summary + (slip ? '\n\nWord order slip attached. Saved in Drive: ' + slip.url : ''),
    attachments: attachments,
  });

  if (c.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) {
    MailApp.sendEmail({
      to: c.email,
      subject: (paid ? 'Payment received for your KANYA order ' : 'We received your KANYA order ') + order.orderNumber,
      body: 'Hi ' + c.name + ',\n\nThank you for your order. This is what we received:\n\n' + summary +
        '\n\nWe will confirm the delivery with you on WhatsApp shortly.\n\nKANYA',
      attachments: attachments,
    });
  }
}

// Bank transfer orders: row + Word slip + emails straight away
function finishOrder(order, status, paid) {
  let slip = null;
  try {
    slip = createOrderSlip(order, status);
  } catch (err) {
    console.error('Order slip failed: ' + err); // the order is still saved and emailed, just without the file
  }
  appendOrderRow(order, status, slip ? slip.url : '');
  sendOrderEmails(order, slip, paid);
}

// ---- PayHere card payments --------------------------------------------------------------------

function md5Hex(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, value, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}

// Step 1: the customer chose card. Check the amount, save the order as "Awaiting payment", sign the payment.
function startCardPayment(order) {
  const merchantId = merchantId_();
  const secret = props().getProperty('PAYHERE_SECRET');
  if (!merchantId || !secret) return reply({ ok: false, error: 'Card payments are not set up yet' });
  if (!order.customer.email) return reply({ ok: false, error: 'An email address is needed for card payments' });
  if (verifyPrices(order) !== true) return reply({ ok: false, error: 'The price check failed. Please reload the page and try again.' });

  appendOrderRow(order, 'Awaiting payment', '');
  saveOrderData(order);

  const amount = Number(order.total).toFixed(2);
  const hash = md5Hex(merchantId + order.orderNumber + amount + 'LKR' + md5Hex(secret).toUpperCase()).toUpperCase();
  return reply({ ok: true, merchantId: merchantId, orderId: order.orderNumber, amount: amount, currency: 'LKR', hash: hash });
}

// Step 2: PayHere tells us the result (server to server). Verify its signature before trusting it.
function handlePayhereNotify(p) {
  const out = function (t) { return ContentService.createTextOutput(t); };
  const merchantId = merchantId_();
  const secret = props().getProperty('PAYHERE_SECRET');
  if (!merchantId || !secret || p.merchant_id !== merchantId) return out('ignored');

  const expected = md5Hex(p.merchant_id + p.order_id + p.payhere_amount + p.payhere_currency + p.status_code + md5Hex(secret).toUpperCase()).toUpperCase();
  if (expected !== String(p.md5sig).toUpperCase()) {
    console.error('Bad PayHere signature for order ' + p.order_id);
    return out('invalid');
  }

  const order = loadOrderData(p.order_id);
  if (!order) return out('unknown order');
  if (Number(p.payhere_amount).toFixed(2) !== Number(order.total).toFixed(2) || p.payhere_currency !== 'LKR') {
    setStatus(order.orderNumber, 'Check payment amount');
    return out('amount mismatch');
  }

  const code = String(p.status_code);
  if (code === '2') markPaid(order);
  else if (code === '0') setStatus(order.orderNumber, 'Payment pending');
  else if (code === '-1') setStatus(order.orderNumber, 'Cancelled');
  else if (code === '-2') setStatus(order.orderNumber, 'Payment failed');
  else if (code === '-3') setStatus(order.orderNumber, 'Charged back');
  return out('OK');
}

function markPaid(order) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  let row;
  try {
    const sheet = getSheet();
    row = findOrderRow(sheet, order.orderNumber);
    if (!row) return;
    if (sheet.getRange(row, STATUS_COL).getValue() === 'Paid') return; // PayHere can notify twice
    sheet.getRange(row, STATUS_COL).setValue('Paid');
  } finally {
    lock.releaseLock();
  }

  let slip = null;
  try {
    slip = createOrderSlip(order, 'Paid');
    getSheet().getRange(row, SLIP_COL).setValue(slip.url);
  } catch (err) {
    console.error('Order slip failed: ' + err);
  }
  sendOrderEmails(order, slip, true);
}

function setStatus(orderNumber, status) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const sheet = getSheet();
    const row = findOrderRow(sheet, orderNumber);
    if (!row) return;
    const current = sheet.getRange(row, STATUS_COL).getValue();
    if (current === 'Paid' && status !== 'Charged back') return; // never downgrade a paid order
    sheet.getRange(row, STATUS_COL).setValue(status);
  } finally {
    lock.releaseLock();
  }
}

function findOrderRow(sheet, orderNumber) {
  const last = sheet.getLastRow();
  if (last < 2) return 0;
  const cell = sheet.getRange(2, 2, last - 1, 1).createTextFinder(orderNumber).matchEntireCell(true).findNext();
  return cell ? cell.getRow() : 0;
}

// Full order details are kept in a hidden tab so the Word slip and emails can be made when PayHere confirms.
function getDataSheet() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(DATA_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(DATA_SHEET);
    sheet.hideSheet();
  }
  return sheet;
}

function saveOrderData(order) {
  getDataSheet().appendRow([order.orderNumber, JSON.stringify(order)]);
}

function loadOrderData(orderNumber) {
  const sheet = getDataSheet();
  const last = sheet.getLastRow();
  if (last < 1) return null;
  const cell = sheet.getRange(1, 1, last, 1).createTextFinder(String(orderNumber)).matchEntireCell(true).findNext();
  return cell ? JSON.parse(sheet.getRange(cell.getRow(), 2).getValue()) : null;
}

// ---- price check -------------------------------------------------------------------------------

// The website publishes its real prices in /prices.json; every order is compared with that list.
function getPriceList() {
  const cache = CacheService.getScriptCache();
  const cached = cache.get('prices');
  if (cached) return JSON.parse(cached);
  const res = UrlFetchApp.fetch(SITE_URL + '/prices.json', { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) return null;
  const data = JSON.parse(res.getContentText());
  cache.put('prices', JSON.stringify(data), 300);
  return data;
}

// true = prices are right, false = they do not match, null = could not check
function verifyPrices(order) {
  let list;
  try {
    list = getPriceList();
  } catch (err) {
    return null;
  }
  if (!list) return null;
  let subtotal = 0;
  for (let n = 0; n < order.items.length; n++) {
    const item = order.items[n];
    const unit = list.prices[item.id];
    const qty = Number(item.qty);
    if (unit == null || !Number.isInteger(qty) || qty < 1 || qty > 99 || Number(item.unitPrice) !== unit) return false;
    subtotal += unit * qty;
  }
  const shipping = subtotal >= list.shipping.freeOver ? 0 : list.shipping.fee;
  return subtotal === Number(order.subtotal) && shipping === Number(order.shipping) && subtotal + shipping === Number(order.total);
}

// ---- sheet helpers -----------------------------------------------------------------------------

// Uses the sheet this script is attached to; if there is none (standalone script) it creates "KANYA Orders" once.
function getSpreadsheet_() {
  const savedId = props().getProperty('SHEET_ID');
  if (savedId) return SpreadsheetApp.openById(savedId);
  const attached = SpreadsheetApp.getActiveSpreadsheet();
  if (attached) return attached;
  const created = SpreadsheetApp.create('KANYA Orders');
  props().setProperty('SHEET_ID', created.getId());
  return created;
}

function getSheet() {
  const ss = getSpreadsheet_();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

// Stops a customer's text from being run as a spreadsheet formula, and caps its length.
function clean(value) {
  if (typeof value !== 'string') return value;
  const text = value.slice(0, 1000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ---- Word order slip ---------------------------------------------------------------------------

const OLIVE = '#2F4237';
const SAND = '#E9DDC3';
const BORDER = '#DED0B4';

function money(n) {
  return 'Rs. ' + String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function text(value) {
  return String(value == null ? '' : value).slice(0, 1000);
}

function addHeading(body, label) {
  const p = body.appendParagraph(label.toUpperCase());
  p.setFontFamily('Georgia').setFontSize(11).setBold(true).setForegroundColor(OLIVE);
  p.setSpacingBefore(14).setSpacingAfter(4);
}

function addTable(body, rows, headerRow) {
  const table = body.appendTable(rows);
  table.setBorderColor(BORDER).setBorderWidth(0.5);
  for (let r = 0; r < table.getNumRows(); r++) {
    const row = table.getRow(r);
    for (let c = 0; c < row.getNumCells(); c++) {
      const cell = row.getCell(c);
      cell.setFontFamily('Arial').setFontSize(10).setForegroundColor(OLIVE);
      cell.setPaddingTop(5).setPaddingBottom(5);
      if (headerRow && r === 0) cell.setBackgroundColor(OLIVE).setForegroundColor('#FFFFFF').setBold(true);
    }
  }
  return table;
}

function shadeFirstColumn(table) {
  for (let r = 0; r < table.getNumRows(); r++) {
    table.getRow(r).getCell(0).setBackgroundColor(SAND).setBold(true);
  }
}

// Builds the slip as a Google Doc, exports it as .docx, saves it in Drive and returns { blob, url }.
function createOrderSlip(order, status) {
  const c = order.customer;
  const doc = DocumentApp.create('KANYA order ' + order.orderNumber);
  const body = doc.getBody();
  body.setMarginTop(40).setMarginBottom(40).setMarginLeft(50).setMarginRight(50);
  body.clear();

  const logo = body.appendParagraph('K A N Y Ã');
  logo.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontFamily('Georgia').setFontSize(26).setForegroundColor(OLIVE);
  const sub = body.appendParagraph('Fine Jewellery');
  sub.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontFamily('Arial').setFontSize(9).setForegroundColor('#87806F');
  const title = body.appendParagraph('ORDER SLIP');
  title.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setFontFamily('Georgia').setFontSize(15).setBold(true).setForegroundColor(OLIVE);

  const info = addTable(body, [
    ['Order no.', text(order.orderNumber), 'Date', Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'dd MMM yyyy, HH:mm')],
    ['Payment', text(order.payment), 'Status', text(status || 'New')],
  ]);
  shadeFirstColumn(info);
  info.getRow(0).getCell(2).setBackgroundColor(SAND).setBold(true);
  info.getRow(1).getCell(2).setBackgroundColor(SAND).setBold(true);

  addHeading(body, 'Customer details');
  const customer = addTable(body, [
    ['Full name', text(c.name)],
    ['Phone / WhatsApp', text(c.phone)],
    ['Email', text(c.email)],
    ['Delivery address', text(c.address)],
    ['City', text(c.city)],
    ['Postal code', text(c.postalCode)],
  ]);
  shadeFirstColumn(customer);

  addHeading(body, 'Order details');
  const rows = [['#', 'Product', 'Code', 'Qty', 'Unit price', 'Line total']];
  order.items.forEach(function (i, n) {
    rows.push([String(n + 1), text(i.name), text(i.id), String(Number(i.qty) || 0), money(i.unitPrice), money(i.lineTotal)]);
  });
  rows.push(['', '', '', '', 'Subtotal', money(order.subtotal)]);
  rows.push(['', '', '', '', 'Shipping', Number(order.shipping) === 0 ? 'Free' : money(order.shipping)]);
  rows.push(['', '', '', '', 'TOTAL', money(order.total)]);
  const items = addTable(body, rows, true);
  for (let r = rows.length - 3; r < rows.length; r++) {
    items.getRow(r).getCell(4).setBold(true).setBackgroundColor(SAND);
    items.getRow(r).getCell(5).setBold(true).setBackgroundColor(SAND);
  }

  if (order.payment === 'Bank transfer') {
    addHeading(body, 'Payment by bank transfer');
    const bank = addTable(body, [
      ['Bank', "People's Bank, Kaduwela"],
      ['Account name', 'J.A.V Sithumini'],
      ['Account number', '196 2 001 5 0032395'],
      ['Payment reference', text(order.orderNumber)],
    ]);
    shadeFirstColumn(bank);
  }

  if (c.notes) {
    addHeading(body, 'Notes');
    body.appendParagraph(text(c.notes)).setFontFamily('Arial').setFontSize(10);
  }

  const thanks = body.appendParagraph('Thank you for choosing KANYÃ.');
  thanks.setAlignment(DocumentApp.HorizontalAlignment.CENTER).setItalic(true).setFontFamily('Arial').setFontSize(9).setForegroundColor('#87806F').setSpacingBefore(18);

  doc.saveAndClose();

  const exportUrl = 'https://docs.google.com/document/d/' + doc.getId() + '/export?format=docx';
  const response = UrlFetchApp.fetch(exportUrl, {
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true,
  });
  if (response.getResponseCode() !== 200) {
    DriveApp.getFileById(doc.getId()).setTrashed(true);
    throw new Error('Word export failed: HTTP ' + response.getResponseCode());
  }
  const blob = response.getBlob().setName('KANYA-order-' + order.orderNumber + '.docx');

  const folders = DriveApp.getFoldersByName(SLIP_FOLDER);
  const folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(SLIP_FOLDER);
  const file = folder.createFile(blob);
  DriveApp.getFileById(doc.getId()).setTrashed(true); // the temporary Google Doc is no longer needed

  return { blob: blob, url: file.getUrl() };
}
