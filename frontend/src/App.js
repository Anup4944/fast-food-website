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
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile.jsx";
import Order from "./components/order/Order";
import OrderDetails from "./components/order/OrderDetails.jsx";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users.jsx";
import Orders from "./components/admin/Orders.jsx";
import About from "./components/about/About.jsx";
import NotFound from "./components/layout/NotFound";

import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Shipping />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
