import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order placed successfully, check order status</p>
        <Link to="/my-orders">Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
