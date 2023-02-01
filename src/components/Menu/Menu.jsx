import React from "react";
import "./Menu.scss";

import { useState } from "react";
const Menu = ({ burgers }) => {
  const [item, setItem] = useState(false)
  return (
    <div className="menu">
      {burgers.map((item) => (
        <div key={item.id} className="menu__item">
          <div className="menu__title-block">
            <h4>{item.title}</h4>
            <button className="menu__btn" >Add</button>
            <span>{item.price} $</span>
          </div>
          <img src={item.img} alt="" className="menu__img" />

        </div>
      ))}

    </div>
  );
};

export default Menu;
