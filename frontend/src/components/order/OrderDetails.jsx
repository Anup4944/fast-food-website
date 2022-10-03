import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b> 10 Thomas Royal
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b> 10 Thomas Royal
          </p>
          <p>
            <b>Phone</b> 10 Thomas Royal
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> Preparing
          </p>
          <p>
            <b>Placed At</b> {Date.now()}
          </p>
          <p>
            <b>Delivered At</b> {Date.now()}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> Online
          </p>
          <p>
            <b>Payment Reference</b> {Date.now()}
          </p>
          <p>
            <b>Paid At</b> {Date.now()}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Total items </b> $50
          </p>
          <p>
            <b>Shipping charges </b> $250
          </p>
          <p>
            <b>Total Amount </b> $250
          </p>
        </div>
        <article>
          <h1> Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span> 2</span> X <span>234</span>
            </div>
          </div>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span> 2</span> X <span>234</span>
            </div>
          </div>
          <div>
            <h4> Veg Cheese Burger</h4>
            <div>
              <span> 2</span> X <span>234</span>
            </div>
          </div>
          <div>
            <h4> Chicken Cheese Burger</h4>
            <div>
              <span> 2</span> X <span>234</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <h4 style={{ fontWeight: 800 }}>$50</h4>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
