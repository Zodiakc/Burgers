import React from "react";
import "./Menu.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setValue,
  countPrice,
  implementItemPrice,
  sumCount,
} from "../../redux/slices/cardSlice";
const Menu = ({ burgers }) => {
  const dispatch = useDispatch();
  const itemsArr = useSelector((state) => state.card.value);
  const titles = itemsArr.map((i) => i.title);
  function createItem(item) {
    if (!titles.includes(item.title)) {
      dispatch(setValue(item));
      dispatch(countPrice(item.price));
      dispatch(sumCount(item.price));

    }
  }
  return (
    <div className="menu">
      {burgers.map((item) => (
        <div key={item.id} className="menu__item">
          <div className="menu__title-block">
            <h4>{item.title}</h4>
            <button className="menu__btn" onClick={() => createItem(item)}>
              Add
            </button>
            <span>{item.price} $</span>
          </div>
          <img src={item.img} alt="" className="menu__img" />
        </div>
      ))}
    </div>
  );
};

export default Menu;
