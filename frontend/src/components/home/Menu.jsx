import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger Meal"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={300}
          title="Chicken Burger Meal"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={200}
          title="Beef Burger Meal"
          handler={addToCartHandler}
          delay={0.3}
        />
        <MenuCard
          itemNum={4}
          burgerSrc={burger3}
          price={200}
          title="Veg Burger Meal"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={5}
          burgerSrc={burger3}
          price={200}
          title="Mix Burger Meal"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          itemNum={6}
          burgerSrc={burger3}
          price={200}
          title="Spicy Burger Meal"
          handler={addToCartHandler}
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Menu;
