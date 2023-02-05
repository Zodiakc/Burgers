import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/currentPageSlice";
import { Pagination } from "@mui/material";
import Menu from "../Menu/Menu";
import "./Main.scss";
const Main = ({ burgers }) => {
  const dispatch = useDispatch();
  const amountPage = useSelector((state) => state.current.amountPage);
  
  const handlePage = (value) => {
    dispatch(setCurrentPage(value));
  };
  return (
    <main className="main">
      <Menu burgers={burgers} />
      <Pagination
        className="main__pagination"
        count={amountPage}
        defaultPage={1}
        hideNextButton={true}
        hidePrevButton={true}
        onChange={(e) => handlePage(e.target.innerText)}
      />
    </main>
  );
};

export default Main;
