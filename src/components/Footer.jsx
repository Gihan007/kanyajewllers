import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9.5c0-.28.22-.5.5-.5H15" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.2em] text-pearl">
            KANY<span className="text-gradient-gold">Ã</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Fine jewellery designed for the modern era — crafted with light, precision, and intent.
          </p>
          <div className="mt-6 flex gap-4 text-mist">
            <a href="#" aria-label="Instagram" className="-m-2 p-2 transition-colors hover:text-gold">
              <InstagramIcon width={18} height={18} />
            </a>
            <a href="#" aria-label="Facebook" className="-m-2 p-2 transition-colors hover:text-gold">
              <FacebookIcon width={18} height={18} />
            </a>
            <a href="mailto:orders@kanyajewellers.com" aria-label="Email" className="-m-2 p-2 transition-colors hover:text-gold">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Shop</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li><Link to="/shop" className="inline-block py-1.5 hover:text-pearl">All Jewellery</Link></li>
            <li><Link to="/shop?category=Rings" className="inline-block py-1.5 hover:text-pearl">Rings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="inline-block py-1.5 hover:text-pearl">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="inline-block py-1.5 hover:text-pearl">Earrings</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li><Link to="/build-your-story" className="inline-block py-1.5 hover:text-pearl">Build Your Story</Link></li>
            <li><Link to="/about" className="inline-block py-1.5 hover:text-pearl">Our Story</Link></li>
            <li><Link to="/contact" className="inline-block py-1.5 hover:text-pearl">Contact</Link></li>
            <li><a href="#" className="inline-block py-1.5 hover:text-pearl">Shipping &amp; Returns</a></li>
            <li><a href="#" className="inline-block py-1.5 hover:text-pearl">Care Guide</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Stay in the Light</p>
          <p className="mt-4 text-sm text-mist">Subscribe for new arrivals and private previews.</p>
          <form className="mt-4 flex overflow-hidden rounded-full border border-ink/16 bg-panel" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2.5 text-sm text-pearl placeholder:text-mist/60 focus:outline-none"
            />
            <button type="submit" className="btn-dark px-5 text-xs uppercase tracking-wider">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 text-center text-xs text-mist/70">
        © {new Date().getFullYear()} KANYÃ. All rights reserved.
      </div>
    </footer>
  );
}
