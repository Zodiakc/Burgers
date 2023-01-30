import React from "react";
import { useState } from "react";
import "./Sidebar.scss";
const Sidebar = ({setCategory}) => {
  const [active, setActive] = useState(0)
  const categories = ["All food", "Burgers", "Drinks", "Potato"]
  function addActive(item, index){
    setActive(index)
    if (item == "All food"){
      setCategory("")
    } else{
      setCategory(item.toLowerCase())
    }
   
  }
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {categories.map((item, index)=>(<li key={index} className={index == active ? "active" : ""} onClick={()=>{addActive(item, index)}}>{item}</li>))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
