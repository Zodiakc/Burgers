import React from "react";
import "./Menu.scss";
import { useDispatch, useSelector } from "react-redux";
import { setValue, countPrice, sumCount } from "../../redux/slices/cardSlice";
import Skeleton from "@mui/material/Skeleton";
const Menu = ({ burgers, loading }) => {
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
      {burgers.map((item) =>
         loading ? (
          <div className="skeleton">
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton />
          </div>
        ) : (
          <div key={item.id} className="menu__item">
            <div className="menu__title-block">
              <div className="menu__title-wrapper">
                <h4>{item.title}</h4>
                <button className="menu__btn" onClick={() => createItem(item)}>
                  Add
                </button>
              </div>
              <span>{item.price} $</span>
            </div>
            <img src={item.img} alt="smth" className="menu__img"/>
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
