import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";

function App() {
  const [burgers, setBurgers] = useState([]);
  const category = useSelector((state) => state.filter.category);
  const search = useSelector((state) => state.search.searchValue);
  const currentPage = useSelector((state) => state.current.currentPage);
  const card = useSelector((state) => state.card.card);

  useEffect(() => {
    fetch(
      `https://63d34e6da93a149755a92731.mockapi.io/api/burgers?page=${currentPage}&limit=8&filter=${category}&search=${search}`
    )
      .then((res) => res.json())
      .then((json) => setBurgers(json));
  }, [currentPage, category, search]);
  return (
    <div className="App">
      <div className="dashboard">
        <Header />
        <div className="dashboard__wrapper">
          <Sidebar />
          <Main burgers={burgers} />
          {card && <Card />}
        </div>
      </div>
    </div>
  );
}

export default App;
