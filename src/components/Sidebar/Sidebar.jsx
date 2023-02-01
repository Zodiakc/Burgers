import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/filterSLice";
import "./Sidebar.scss";
const Sidebar = () => {
  const [active, setActive] = useState(0);
  const categories = ["All food", "Burgers", "Drinks", "Potato"];
  const dispatch = useDispatch();
  function addActive(item, index) {
    setActive(index);
    if (item == "All food") {
      dispatch(setCategory(""));
    } else {
      dispatch(setCategory(item.toLowerCase()));
    }
  }
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {categories.map((item, index) => (
            <li
              key={index}
              className={index == active ? "active" : ""}
              onClick={() => {
                addActive(item, index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
