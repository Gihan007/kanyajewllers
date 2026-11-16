import { Mail, Phone } from "lucide-react";
import { store } from "../config";
import { useToast } from "../context/ToastContext";

const inputClass =
  "w-full rounded-lg border border-ink/16 bg-panel px-4 py-3 text-sm text-pearl placeholder:text-mist/50 outline-none focus:border-gold";

const phoneDigits = store.whatsappNumber.replace(/\D/g, "");
const phoneDisplay = `+${phoneDigits.slice(0, 2)} ${phoneDigits.slice(2, 4)} ${phoneDigits.slice(4, 7)} ${phoneDigits.slice(7)}`;

export default function Contact() {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Can't reach this number right now", text: "Please try again shortly." });
  };

  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Get in Touch</p>
        <h1 className="mt-3 font-display text-5xl text-pearl">Contact Us</h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-gold" size={20} />
              <div>
                <p className="text-pearl">Email</p>
                <a href="mailto:orders@kanyajewellers.com" className="text-sm text-mist hover:text-pearl">orders@kanyajewellers.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-gold" size={20} />
              <div>
                <p className="text-pearl">Phone</p>
                <a href={`tel:+${phoneDigits}`} className="text-sm text-mist hover:text-pearl">{phoneDisplay}</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl border border-ink/16 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Name" className={inputClass} />
                <input required name="email" type="email" placeholder="Email" className={inputClass} />
              </div>
              <input name="subject" placeholder="Subject" className={inputClass} />
              <textarea required name="message" rows={5} placeholder="Your message" className={inputClass} />
              <button type="submit" className="btn-dark px-7 py-3 text-sm uppercase tracking-wider">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
