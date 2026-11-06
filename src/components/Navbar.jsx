import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, User, Heart, X, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { styles } from "../data/products";

const menuCategories = ["Rings", "Earrings", "Necklaces", "Bracelets", "Anklets"];

const simpleLinks = [
  { to: "/build-your-story", label: "Build Your Story" },
  { to: "/gifting", label: "Gifting" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkIdle = transparent ? "text-sand/90 hover:text-sand" : "text-pearl/80 hover:text-gold";
  const linkActive = transparent ? "text-sand" : "text-gold";
  const iconColor = transparent ? "text-sand/90 hover:text-sand" : "text-pearl/80 hover:text-gold";

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 inset-x-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-panel shadow-sm"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1600px] items-center justify-between border-b px-6 py-5 lg:px-16 ${
          transparent ? "border-transparent" : "border-ink/10"
        }`}
      >
        <Link
          to="/"
          className={`font-display text-2xl tracking-[0.2em] ${transparent ? "text-sand" : "text-pearl"}`}
        >
          KANY<span className={transparent ? "text-gold-soft" : "text-gradient-gold"}>Ã</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                isActive ? linkActive : linkIdle
              }`
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `flex items-center gap-1 font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive ? linkActive : linkIdle
                }`
              }
            >
              Shop <ChevronDown size={12} />
            </NavLink>

            {shopOpen && (
              <div className="absolute left-1/2 top-full w-[600px] -translate-x-1/2 rounded-sm border border-ink/10 bg-panel p-7 shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  {styles.map((st) => (
                    <div key={st.key}>
                      <Link
                        to={`/shop?style=${st.key}`}
                        onClick={() => setShopOpen(false)}
                        className="block whitespace-nowrap border-b border-ink/10 pb-3 font-display text-lg leading-snug text-pearl transition-colors hover:text-gold"
                      >
                        {st.label}
                      </Link>
                      <ul className="mt-4 space-y-2.5">
                        {menuCategories.map((c) => (
                          <li key={c}>
                            <Link
                              to={`/shop?style=${st.key}&category=${c}`}
                              onClick={() => setShopOpen(false)}
                              className="text-xs uppercase tracking-[0.15em] text-mist transition-colors hover:text-gold"
                            >
                              {c}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  to="/shop"
                  className="underline-grow mt-5 block text-center text-xs uppercase tracking-[0.15em] text-gold"
                >
                  View All Jewellery →
                </Link>
              </div>
            )}
          </div>

          {simpleLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                  isActive ? linkActive : linkIdle
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="Search" className={`hidden transition-colors md:block ${iconColor}`}>
            <Search size={18} />
          </button>
          <button
            type="button"
            aria-label="Account (coming soon)"
            className={`hidden transition-colors md:block ${iconColor}`}
          >
            <User size={18} />
          </button>
          <button
            type="button"
            aria-label="Wishlist (coming soon)"
            className={`hidden transition-colors md:block ${iconColor}`}
          >
            <Heart size={18} />
          </button>
          <Link to="/cart" aria-label="Cart" className={`relative transition-colors ${iconColor}`}>
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-sand">
                {count}
              </span>
            )}
          </Link>
          <button type="button" className={`md:hidden ${transparent ? "text-sand" : "text-pearl/80"}`} onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-panel px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) => `font-sans text-sm uppercase tracking-[0.15em] ${isActive ? "text-gold" : "text-pearl"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `font-sans text-sm uppercase tracking-[0.15em] ${isActive ? "text-gold" : "text-pearl"}`}
            >
              Shop
            </NavLink>
            {simpleLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-[0.15em] ${isActive ? "text-gold" : "text-pearl"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
