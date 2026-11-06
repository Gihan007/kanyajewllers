import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-ink/16 bg-panel px-4 py-3 text-sm text-pearl placeholder:text-mist/50 outline-none focus:border-gold";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Get in Touch</p>
        <h1 className="mt-3 font-display text-5xl text-pearl">Contact Us</h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-gold" size={20} />
              <div>
                <p className="text-pearl">Studio</p>
                <p className="text-sm text-mist">123 Lumen Street, Design District</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-gold" size={20} />
              <div>
                <p className="text-pearl">Email</p>
                <p className="text-sm text-mist">hello@kanya.example</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-gold" size={20} />
              <div>
                <p className="text-pearl">Phone</p>
                <p className="text-sm text-mist">+1 (555) 012-3456</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="glass rounded-2xl border border-ink/16 p-10 text-center">
                <h2 className="font-display text-2xl text-pearl">Message Sent</h2>
                <p className="mt-3 text-mist">Thank you — our team will reply within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl border border-ink/16 p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Name" className={inputClass} />
                  <input required type="email" placeholder="Email" className={inputClass} />
                </div>
                <input placeholder="Subject" className={inputClass} />
                <textarea required rows={5} placeholder="Your message" className={inputClass} />
                <button type="submit" className="btn-dark px-7 py-3 text-sm uppercase tracking-wider">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
