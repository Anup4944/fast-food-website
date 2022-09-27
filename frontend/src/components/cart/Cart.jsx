import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Burger" />
      </div>
      <div>
        <button onClick={increment}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={decrement}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Beef Burger"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>$ 25</p>
          </div>
          <div>
            <h4>Shipping Charge</h4>
            <p>$ 5</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>$ 30</p>
          </div>
          <Link to="/checkout">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
