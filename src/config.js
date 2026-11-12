// Store settings. Fill in the blanks below, then push to main to publish.
export const store = {
  name: "KANYÃ",

  // WhatsApp number that receives every order, digits only with country code (Sri Lanka = 94, drop the leading 0).
  // Example: 0771234567 -> "94771234567". Leave empty and checkout stays closed.
  whatsappNumber: "94716988498",

  // Google Apps Script web app URL that saves each order to your Google Sheet (see order-backend/README.md).
  // Optional: with it empty, orders still arrive on WhatsApp but are not saved to the sheet.
  orderEndpoint: "https://script.google.com/macros/s/AKfycbzCuhL3r3Nv81MN3MlYNh5UUZ4hCx8aUDKP-TbBEq8nkVnpjPTAF_SjXlCfiUBUCI6j/exec",

  // Random text that must match SITE_KEY in order-backend/Code.gs. It only filters casual spam.
  siteKey: "kj-bae1ee88b9aa61b633125122",

  // Shown to the customer after they choose "Bank transfer". Leave bankName empty to hide that option.
  bank: {
    bankName: "People's Bank",
    accountName: "J.A.V Sithumini",
    accountNumber: "196 2 001 5 0032395",
    branch: "Kaduwela",
  },

  // PayHere online card payments (see order-backend/README.md). The Merchant SECRET is never put here:
  // it lives only in the Google script's private settings. Turn "enabled" on once the steps in the README are done.
  payhere: { enabled: false, sandbox: true, merchantId: "1239144" },

  shipping: { fee: 350, freeOver: 5000 },
};

export const bankConfigured = Boolean(store.bank.bankName && store.bank.accountNumber);
export const cardEnabled = store.payhere.enabled && Boolean(store.payhere.merchantId) && Boolean(store.orderEndpoint);
export const ordersOpen = Boolean(store.whatsappNumber) && (bankConfigured || cardEnabled);

// The payment choices shown at checkout, in this order. "enabled: false" shows "Coming soon".
// Koko and Mintpay stay off until their merchant accounts are approved and connected (they need their own code).
export const paymentMethods = [
  { key: "Bank transfer", title: "Bank transfer", note: "You get our bank details after placing the order. We pack once your payment slip is confirmed.", enabled: bankConfigured },
  { key: "Online card payment", title: "Online card payment", note: "Pay securely by card.", enabled: cardEnabled },
  { key: "Koko", title: "Koko", note: "Buy now, pay later in instalments.", enabled: false },
  { key: "Mintpay", title: "Mintpay", note: "Buy now, pay later in instalments.", enabled: false },
];
