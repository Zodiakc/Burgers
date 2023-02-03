import { useSelector, useDispatch } from "react-redux";
import {
  clearValue,
  deleteCardItem,
  deletePrice,
  implementItemPrice,
  changeIndex,
  countPrice,
  decrementItemPrice,
  sumCount,
} from "../../../redux/slices/cardSlice";
import "../Card.scss";

const CardItem = () => {
  const item = useSelector((state) => state.card.value);
  const totalPriceArr = useSelector((state) => state.card.itemPrice);
  const totalPrice = totalPriceArr.reduce((acc, item) => acc + item, 0);
  const itemPrice = useSelector((state) => state.card.itemPrice);
  const sumArr = useSelector((state) => state.card.sum);
  const sum = sumArr.reduce((acc, item) => acc + item, 0);
  
  let totalSum = Number(sum + Number(totalPrice)).toFixed(2);
  const dispatch = useDispatch();
  function clearCard() {
    dispatch(clearValue());
  }
  function deleteItem(index, price, counter) {
    dispatch(deleteCardItem(index));
    dispatch(deletePrice(price));
    dispatch(sumCount(-(price * counter)))
  }
  function increment(item, index) {
    dispatch(implementItemPrice(index));
  }
  function decrement(item, index) {
    dispatch(decrementItemPrice(index));
  }

  return (
    <div className="card__padding">
      {item.map((i, index) => (
        <div className="card__item" key={i.id}>
          <div className="card__wrapper">
            <div className="card__price-block">
              <h4>{i.title}</h4>
              <span>{i.sum.toFixed(2)} $</span>
            </div>
            <div className="card__btn-block">
              <button
                className="card__btn"
                onClick={() => {
                  increment(i, index);
                }}
              >
                +
              </button>
              <span>{i.counter}</span>
              <button
                className="card__btn"
                onClick={() => {
                  decrement(i, index);
                }}
              >
                -
              </button>
              <span
                className="card__cross"
                onClick={() => {
                  deleteItem(index, i.price, i.counter);
                }}
              >
                X
              </span>
            </div>
          </div>
        </div>
      ))}
      {item[0] && (
        <div className="card__order-block">
          <h4>
            <span>Total price: {totalSum}</span>
          </h4>
          <button className="card__btn-order">Order</button>
          <button className="card__clear" onClick={() => clearCard()}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default CardItem;
