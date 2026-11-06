# Order backend (Google Sheet + Word slip + email)

For every order placed on the site this script:

1. saves a row in your Google Sheet (tab "Orders"),
2. creates a Word order slip (`KANYA-order-<number>.docx`) with the customer's details and the order details,
   and saves it in your Google Drive folder **KANYA Order Slips** (the sheet row links to it),
3. emails you the order with the Word slip attached (and sends the customer a copy if they gave an email).

Orders also open a WhatsApp message, so you still get the order if the sheet is ever down.

## One-time setup (about 5 minutes)

1. Create a new Google Sheet (sheets.new) and name it "KANYA Orders".
2. In the sheet: **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `Code.gs`, and click **Save**.
4. Click **Deploy → New deployment**, choose the type **Web app**, then set:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and approve the permissions Google asks for
   (it needs to edit your sheet, create the Word slips in your Drive, and send email as you).
   Google shows an "unverified app" warning because you wrote the script yourself: click
   **Advanced → Go to (project name)** and allow.
6. Copy the **Web app URL** (it ends in `/exec`).
7. Put that URL in `src/config.js` as `orderEndpoint`, and push to `main`.

## Changing the script later

Edit the code, then **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**.
The URL stays the same.

## Notes

- Prices are calculated in the customer's browser, but the script compares every order with the real price
  list and marks the row "Check prices" if they differ. Still glance at the total before you pack an order.
- The `SITE_KEY` in `Code.gs` and `siteKey` in `src/config.js` must be identical. It only filters casual spam.
- Free Google accounts can send about 100 emails a day through Apps Script.

## Online card payments (PayHere)

Card payments are built in but switched off until you have a PayHere account. The flow: the customer picks
"Online card payment" and presses Place Order, this script checks the prices and signs the payment, the customer pays
on PayHere's own secure page, and PayHere tells this script the result. Paid orders then get the Word slip and emails.
The card number is typed on PayHere's page only, never on your site.

1. Sign up as a merchant at https://www.payhere.lk (business details and a bank account for payouts; approval can take a few days).
   Meanwhile create a free **sandbox** account at https://sandbox.payhere.lk to test with fake cards.
2. In PayHere: **Settings → Domains & Credentials → Add domain** `kanyajewellers.com`. PayHere then shows the
   **Merchant ID** and the **Merchant Secret** for that domain (the sandbox and the live account each have their own pair).
3. In this Apps Script project: **Project Settings (gear icon) → Script properties → Add script property** twice:
   - `PAYHERE_MERCHANT_ID` = the Merchant ID
   - `PAYHERE_SECRET` = the Merchant Secret (keep it private, it is never put on the website)
4. **Deploy → Manage deployments → pencil icon → Version: New version → Deploy** (the URL stays the same).
5. In `src/config.js` set `orderEndpoint` to the script URL and `payhere` to
   `{ enabled: true, sandbox: true, merchantId: "<your sandbox Merchant ID>" }`, then push to `main`.
6. Place a test order with PayHere's sandbox test cards. The sheet row should go
   "Awaiting payment" -> "Paid", and you should get the email with the Word slip.
7. To go live: use the live Merchant ID and Secret in step 3, set `sandbox: false` and the live `merchantId` in step 5, push.

Order statuses you will see in the sheet: New, Awaiting payment, Paid, Payment pending, Payment failed, Cancelled,
Charged back, Check prices (the order's prices did not match the real price list), Check payment amount.

Things to know:
- PayHere reports results to the script's web address. If a status ever stays on "Awaiting payment" after a customer
  says they paid, check the payment in your PayHere dashboard and change the status by hand.
- The site publishes its price list at `/prices.json` on every update; the script compares every order with it.
- Free Google accounts can send about 100 emails a day through Apps Script.

