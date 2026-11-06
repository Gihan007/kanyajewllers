// KANYA order backend: paste into a Google Sheet's Apps Script (see README.md).
// Saves every order as a row in the "Orders" tab and emails you a copy.

const SITE_KEY = 'kj-bae1ee88b9aa61b633125122'; // must match siteKey in src/config.js
const SHEET_NAME = 'Orders';
const HEADERS = [
  'Received', 'Order no.', 'Status', 'Name', 'Phone', 'Email', 'Address', 'City',
  'Postal code', 'Payment', 'Items', 'Subtotal', 'Shipping', 'Total', 'Notes',
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

    const lock = LockService.getScriptLock();
    lock.waitLock(15000);
    try {
      const sheet = getSheet();
      sheet.appendRow([
        new Date(), order.orderNumber, 'New', c.name, c.phone, c.email, c.address, c.city,
        c.postalCode, order.payment, itemsText, order.subtotal, order.shipping, order.total, c.notes,
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

    MailApp.sendEmail(Session.getEffectiveUser().getEmail(), 'New KANYA order ' + order.orderNumber + ' - Rs. ' + order.total, summary);

    if (c.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) {
      MailApp.sendEmail(
        c.email,
        'We received your KANYA order ' + order.orderNumber,
        'Hi ' + c.name + ',\n\nThank you for your order. This is what we received:\n\n' + summary +
        '\n\nWe will confirm it with you on WhatsApp shortly.\n\nKANYA'
      );
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
