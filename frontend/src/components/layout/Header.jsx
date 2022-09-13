import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../styles/header.scss";

const Header = () => {
  const isAuth = false;
  return (
    <nav>
      <div>
        <IoFastFoodOutline />
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <Link to="/">
          <FiUser />
        </Link>
        <Link to={isAuth ? "/me" : "/login"}>
          {isAuth ? <FiUser /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
