import { store } from "../config";

const OLIVE = [47, 66, 55];
const SAND = [233, 221, 195];
const CREAM = [250, 246, 238];
const MIST = [135, 128, 111];
const LINE = [222, 208, 180];

const rs = (n) => `Rs. ${Math.round(Number(n) || 0).toLocaleString("en-LK")}`;

// Builds the order slip as a PDF in the browser. The PDF library is loaded only when the customer clicks the button.
export async function downloadOrderSlipPdf(order) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const left = 15;
  const right = pageW - 15;
  const width = right - left;
  let y = 18;

  const setText = (size, style, color) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
  };
  const ensureSpace = (needed) => {
    if (y + needed > 280) {
      doc.addPage();
      y = 18;
    }
  };
  const heading = (title) => {
    ensureSpace(14);
    y += 6;
    setText(10, "bold", OLIVE);
    doc.text(title.toUpperCase(), left, y);
    doc.setDrawColor(...OLIVE);
    doc.setLineWidth(0.4);
    doc.line(left, y + 1.5, right, y + 1.5);
    y += 6;
  };
  const labelRow = (label, value, height = 7.5) => {
    ensureSpace(height);
    doc.setFillColor(...SAND);
    doc.rect(left, y, 42, height, "F");
    doc.setFillColor(...CREAM);
    doc.rect(left + 42, y, width - 42, height, "F");
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.rect(left, y, width, height);
    setText(9, "bold", OLIVE);
    doc.text(label, left + 2, y + 5);
    setText(9.5, "normal", OLIVE);
    const lines = doc.splitTextToSize(String(value || ""), width - 46);
    doc.text(lines, left + 44, y + 5);
    y += Math.max(height, lines.length * 4.6 + 3);
  };

  // header
  setText(24, "normal", OLIVE);
  doc.text("K A N Y Ã", pageW / 2, y, { align: "center" });
  y += 6;
  setText(9, "normal", MIST);
  doc.text("Fine Jewellery", pageW / 2, y, { align: "center" });
  y += 9;
  setText(15, "bold", OLIVE);
  doc.text("ORDER SLIP", pageW / 2, y, { align: "center" });
  y += 4;

  const date = new Date(order.createdAt || Date.now()).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
  heading("Order");
  labelRow("Order no.", order.orderNumber);
  labelRow("Date", date);
  labelRow("Payment", order.payment);

  heading("Customer details");
  const c = order.customer;
  labelRow("Full name", c.name);
  labelRow("Phone / WhatsApp", c.phone);
  labelRow("Email", c.email);
  labelRow("Delivery address", [c.address, c.city, c.postalCode].filter(Boolean).join(", "));

  heading("Order details");
  const cols = [
    { x: left + 2, label: "#", w: 8 },
    { x: left + 10, label: "Product", w: 78 },
    { x: left + 90, label: "Code", w: 24 },
    { x: left + 116, label: "Qty", w: 10 },
    { x: right - 2, label: "Line total", align: "right" },
  ];
  ensureSpace(10);
  doc.setFillColor(...OLIVE);
  doc.rect(left, y, width, 7.5, "F");
  setText(8.5, "bold", [255, 255, 255]);
  cols.forEach((col) => doc.text(col.label, col.x, y + 5, col.align ? { align: col.align } : undefined));
  y += 7.5;
  order.items.forEach((item, i) => {
    const name = doc.splitTextToSize(String(item.name), 76);
    const rowH = Math.max(7.5, name.length * 4.4 + 3);
    ensureSpace(rowH);
    doc.setDrawColor(...LINE);
    doc.setLineWidth(0.2);
    doc.rect(left, y, width, rowH);
    setText(9, "normal", OLIVE);
    doc.text(String(i + 1), cols[0].x, y + 5);
    doc.text(name, cols[1].x, y + 5);
    doc.text(String(item.id), cols[2].x, y + 5);
    doc.text(String(item.qty), cols[3].x, y + 5);
    doc.text(rs(item.lineTotal), cols[4].x, y + 5, { align: "right" });
    y += rowH;
  });
  const totalRow = (label, value, strong) => {
    ensureSpace(8);
    doc.setFillColor(...(strong ? SAND : CREAM));
    doc.rect(left + 90, y, width - 90, 7.5, "F");
    doc.setDrawColor(...LINE);
    doc.rect(left + 90, y, width - 90, 7.5);
    setText(strong ? 10 : 9, "bold", OLIVE);
    doc.text(label, left + 92, y + 5);
    doc.text(value, right - 2, y + 5, { align: "right" });
    y += 7.5;
  };
  totalRow("Subtotal", rs(order.subtotal));
  totalRow("Shipping", order.shipping === 0 ? "Free" : rs(order.shipping));
  totalRow("TOTAL", rs(order.total), true);

  if (order.payment === "Bank transfer") {
    heading("Payment by bank transfer");
    labelRow("Bank", store.bank.bankName);
    labelRow("Account name", store.bank.accountName);
    labelRow("Account number", store.bank.accountNumber);
    if (store.bank.branch) labelRow("Branch", store.bank.branch);
    labelRow("Payment reference", order.orderNumber);
  }

  if (c.notes) {
    heading("Notes");
    setText(9.5, "normal", OLIVE);
    const lines = doc.splitTextToSize(c.notes, width);
    ensureSpace(lines.length * 4.6 + 2);
    doc.text(lines, left, y + 2);
    y += lines.length * 4.6 + 2;
  }

  ensureSpace(14);
  y += 10;
  setText(9, "italic", MIST);
  doc.text("Thank you for choosing KANYÃ.", pageW / 2, y, { align: "center" });
  y += 5;
  setText(8, "normal", MIST);
  doc.text(`kanyajewellers.com  |  WhatsApp ${store.whatsappNumber ? "+" + store.whatsappNumber : ""}`, pageW / 2, y, { align: "center" });

  doc.save(`KANYA-order-${order.orderNumber}.pdf`);
}
