# Order backend (Google Sheet + email)

Every order placed on the site is saved as a row in a Google Sheet and emailed to you.
Orders also open a WhatsApp message, so you still get the order if the sheet is ever down.

## One-time setup (about 5 minutes)

1. Create a new Google Sheet (sheets.new) and name it "KANYA Orders".
2. In the sheet: **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `Code.gs`, and click **Save**.
4. Click **Deploy → New deployment**, choose the type **Web app**, then set:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy** and approve the permissions Google asks for
   (it needs to edit your sheet and send email as you).
6. Copy the **Web app URL** (it ends in `/exec`).
7. Put that URL in `src/config.js` as `orderEndpoint`, and push to `main`.

## Changing the script later

Edit the code, then **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**.
The URL stays the same.

## Notes

- Prices are calculated in the customer's browser, so always check the total in the sheet or WhatsApp
  against your price list before you pack an order.
- The `SITE_KEY` in `Code.gs` and `siteKey` in `src/config.js` must be identical. It only filters casual spam.
- Free Google accounts can send about 100 emails a day through Apps Script.
