import React from "react";
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Cart/Shipping.jsx";
import ConfirmOrder from "./components/cart/Cart/ConfirmOrder.jsx";
import PaymentSuccess from "./components/cart/Cart/PaymentSuccess.jsx";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Shipping />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
