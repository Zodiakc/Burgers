import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  const [active, setActive] = useState(0)
  const categories = ["All food", "Burgers", "Drinks", "Potato"]
  function addActive(index){
    setActive(index)
  }
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {categories.map((item, index)=>(<li key={index} className={index == active ? "active" : ""} onClick={()=>{setActive(index)}}>{item}</li>))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
