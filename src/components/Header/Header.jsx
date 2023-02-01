import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { setSearch } from "../../redux/slices/searchSlice";
import { setCard } from "../../redux/slices/cardSlice";

import "./Header.scss";
const Header = () => {
  const dispatch = useDispatch()
  const card = useSelector((state) => state.card.card);
  function inputSearch(text){
      dispatch(setSearch(text))
  }
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
            onChange={(e)=>{inputSearch(e.target.value)}}
          />
          <img src="images/search.svg" alt="" className="header__search" />
        </div>
        <img src="images/cart.svg" alt="" className="header__cart" onClick={()=>{dispatch(setCard(!card))}}/>
      </div>
    </header>
  );
};

export default Header;
