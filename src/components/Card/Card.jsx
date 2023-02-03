import React from "react";
import "./Card.scss";
import { useSelector } from "react-redux";
import CardItem from "./CardItem/CardItem";
const Card = () => {
  return (
    <div className="card">
      <CardItem />
    </div>
  );
};

export default Card;
