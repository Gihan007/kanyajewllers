import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentReturn from "./pages/PaymentReturn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BuildYourStory from "./pages/BuildYourStory";
import Gifting from "./pages/Gifting";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sand">
      <Navbar />
      <main className="flex-1">
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
          <Route path="/gifting" element={<Gifting />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
