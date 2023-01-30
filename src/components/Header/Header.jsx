import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-block">
        <img src="images/logo.svg" alt="" className="header__logo" />
        <h1 className="header__title">Burger point</h1>
      </div>
      <div className="header__cart-wrapper">
        <div className="header__input-wrapper">
          <input
            type="text"
            className="header__input"
            placeholder="Search..."
          />
          <img src="images/search.svg" alt="" className="header__search" />
        </div>
        <img src="images/cart.svg" alt="" className="header__cart" />
      </div>
    </header>
  );
};

export default Header;
