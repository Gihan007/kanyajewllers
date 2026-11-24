import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sections = [
  {
    title: "Shipping & Delivery",
    items: [
      {
        heading: "Order Processing",
        body: "All orders are carefully packed and dispatched within 2–5 business days from Colombo.",
      },
      {
        heading: "Delivery Timelines",
        list: ["Colombo & Suburbs: 2-3 working days", "Islandwide (Outstation): 2–5 working days"],
      },
      {
        heading: "Delivery Charges",
        body: "Calculated at checkout based on your delivery district — free shipping on orders above LKR 10,000.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        heading: "Hygiene & Safety Policy",
        body: "Due to strict hygiene standards, we do not accept returns or exchanges for change of mind once jewelry packaging has been opened — especially for earrings and pierced pieces.",
      },
      {
        heading: "Damaged or Incorrect Items",
        body: "If your order arrives damaged in transit or you receive the wrong item, please notify us within 48 hours of delivery with a clear photo or unboxing video via WhatsApp or email, and we will arrange a free replacement.",
      },
      {
        heading: "6-Month Warranty Coverage",
        body: "Every KANYA piece includes a 6-month warranty covering manufacturing defects and abnormal color fading under normal daily wear. Accidental breakage, scratches, or damage caused by harsh chemicals/perfumes are not covered.",
      },
    ],
  },
];

export default function ShippingReturns() {
  return (
    <div className="bg-aurora">
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-center text-xs uppercase tracking-[0.2em] text-gold">
          Good to Know
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center font-display text-5xl text-pearl sm:text-6xl"
        >
          Shipping &amp; Returns
        </motion.h1>

        <div className="mt-16 space-y-14">
          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: si * 0.1 }}
            >
              <h2 className="font-display text-2xl text-pearl">{section.title}</h2>
              <div className="mt-6 space-y-6">
                {section.items.map((item) => (
                  <div key={item.heading} className="glass rounded-2xl border border-ink/16 p-6">
                    <h3 className="text-sm uppercase tracking-wider text-gold">{item.heading}</h3>
                    {item.body && <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>}
                    {item.list && (
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-mist">
                        {item.list.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
