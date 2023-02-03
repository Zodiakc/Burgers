import { configureStore } from "@reduxjs/toolkit";
import filter from "../slices/filterSLice";
import search from "../slices/searchSlice";
import current from "../slices/currentPageSlice";
import card from "../slices/cardSlice";

const store = configureStore({
  reducer: {
    filter,
    search,
    current,
    card,
  },
});

export default store;
