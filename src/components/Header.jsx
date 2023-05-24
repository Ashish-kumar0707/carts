import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src="nua-logo.png" alt="" />
      </div>

      <div className="rest">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
