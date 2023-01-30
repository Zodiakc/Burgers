import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "./components/Menu/Menu";
import { Pagination } from "@mui/material";
function App() {
  const [burgers, setBurgers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const handlePage = (value) => {
    setCurrentPage(value);
  };
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
        <Header setSearch={setSearch} />
        <div className="dashboard__wrapper">
          <Sidebar setCategory={setCategory} />
          <main className="main">
            <Menu burgers={burgers} />
            <Pagination
              className="main__pagination"
              count={2}
              defaultPage={1}
              hideNextButton={true}
              hidePrevButton={true}
              onChange={(e) => handlePage(e.target.innerText)}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
