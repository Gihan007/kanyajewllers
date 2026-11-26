import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentReturn from "./pages/PaymentReturn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BuildYourStory from "./pages/BuildYourStory";
import Policies from "./pages/Policies";
import ShippingReturns from "./pages/ShippingReturns";
import CareGuide from "./pages/CareGuide";

// Every new page opens at the top instead of keeping the previous page's scroll position.
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KANYÃ",
  url: "https://kanyajewellers.com",
  logo: "https://kanyajewellers.com/favicon.svg",
  description: "KANYÃ sells waterproof, tarnish-free surgical-grade stainless steel jewellery online in Sri Lanka — rings, necklaces, earrings, bracelets and anklets delivered island-wide.",
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  address: { "@type": "PostalAddress", addressCountry: "LK" },
};

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sand">
      <Helmet>
        <html lang="en" />
        <meta name="geo.region" content="LK" />
        <meta name="geo.placename" content="Sri Lanka" />
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only z-[80] rounded bg-ink px-4 py-2 text-sand focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-return" element={<PaymentReturn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/build-your-story" element={<BuildYourStory />} />
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/care-guide" element={<CareGuide />} />
          <Route path="/pages/faq" element={<Policies />} />
          <Route path="/policies/shipping-policy" element={<Policies />} />
          <Route path="/policies/refund-policy" element={<Policies />} />
          <Route path="/policies/privacy-policy" element={<Policies />} />
          <Route path="/policies/terms-of-service" element={<Policies />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
