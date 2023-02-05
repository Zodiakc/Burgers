import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import { useWindowDimensions } from "./hooks/useResize";

function App() {
  const [burgers, setBurgers] = useState([]);
  const category = useSelector((state) => state.filter.category);
  const search = useSelector((state) => state.search.searchValue);
  const currentPage = useSelector((state) => state.current.currentPage);
  const card = useSelector((state) => state.card.card);

 

  const {width, limitPage} = useWindowDimensions()
  useEffect(() => {
    fetch(
      `https://63d34e6da93a149755a92731.mockapi.io/api/burgers?page=${currentPage}&limit=${limitPage}&filter=${category}&search=${search}`
    )
      .then((res) => res.json())
      .then((json) => setBurgers(json));
  }, [currentPage, category, search, limitPage, window]);

  return (
    <div className="App">
      <div className="dashboard">
        <Header />
        <div className="dashboard__wrapper">
          <Sidebar />
          <Main burgers={burgers} />
          {limitPage}
          {card && <Card />}
        </div>
      </div>
    </div>
  );
}

export default App;
