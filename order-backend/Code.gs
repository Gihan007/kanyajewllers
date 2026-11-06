// KANYA order backend: paste into a Google Sheet's Apps Script (see README.md).
// For every order it: saves a row in the "Orders" tab, creates a Word order slip (.docx) saved in the
// Drive folder "KANYA Order Slips", and emails you the order with the Word file attached.

const SITE_KEY = 'kj-bae1ee88b9aa61b633125122'; // must match siteKey in src/config.js
const SHEET_NAME = 'Orders';
const SLIP_FOLDER = 'KANYA Order Slips';
const HEADERS = [
  'Received', 'Order no.', 'Status', 'Name', 'Phone', 'Email', 'Address', 'City',
  'Postal code', 'Payment', 'Items', 'Subtotal', 'Shipping', 'Total', 'Notes', 'Order slip (Word)',
];

function doPost(e) {
  try {
    const order = JSON.parse(e.postData.contents);
    if (order.siteKey !== SITE_KEY) return reply({ ok: false });
    if (!order.orderNumber || !order.customer || !Array.isArray(order.items) || order.items.length === 0 || order.items.length > 50) {
      return reply({ ok: false });
    }

    const c = order.customer;
    const itemsText = order.items.map((i) => i.qty + ' x ' + i.name + ' (' + i.id + ') @ ' + i.unitPrice).join('\n');

    // Word order slip; if this step fails the order is still saved and emailed, just without the file
    let slip = null;
    try {
      slip = createOrderSlip(order);
    } catch (err) {
      console.error('Order slip failed: ' + err);
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(15000);
    try {
      const sheet = getSheet();
      sheet.appendRow([
        new Date(), order.orderNumber, 'New', c.name, c.phone, c.email, c.address, c.city,
        c.postalCode, order.payment, itemsText, order.subtotal, order.shipping, order.total, c.notes,
        slip ? slip.url : '',
      ].map(clean));
    } finally {
      lock.releaseLock();
    }

    const summary =
      'Order ' + order.orderNumber + '\n' +
      'Name: ' + c.name + '\nPhone: ' + c.phone + (c.email ? '\nEmail: ' + c.email : '') + '\n' +
      'Address: ' + c.address + ', ' + c.city + ' ' + (c.postalCode || '') + '\n' +
      'Payment: ' + order.payment + '\n\n' + itemsText + '\n\n' +
      'Subtotal: Rs. ' + order.subtotal + '\nShipping: Rs. ' + order.shipping + '\nTotal: Rs. ' + order.total +
      (c.notes ? '\n\nNotes: ' + c.notes : '');

    const attachments = slip ? [slip.blob] : [];
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: 'New KANYA order ' + order.orderNumber + ' - Rs. ' + order.total,
      body: summary + (slip ? '\n\nWord order slip attached. Saved in Drive: ' + slip.url : ''),
      attachments: attachments,
    });

    if (c.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) {
      MailApp.sendEmail({
        to: c.email,
        subject: 'We received your KANYA order ' + order.orderNumber,
        body: 'Hi ' + c.name + ',\n\nThank you for your order. This is what we received:\n\n' + summary +
          '\n\nWe will confirm it with you on WhatsApp shortly.\n\nKANYA',
        attachments: attachments,
      });
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function doGet() {
  return reply({ ok: true, service: 'kanya-orders' });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
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
function createOrderSlip(order) {
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
    ['Payment', text(order.payment), 'Status', 'New'],
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
