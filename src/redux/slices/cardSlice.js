import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  card: false,
  value: [],
  price: 0,
  currIndex: 0,
  itemPrice: [],
  sum: [],
  popap: false,
};

export const cardSlice = createSlice({
  name: "cardPage",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.card = action.payload;
    },
    setValue: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCardItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    countPrice: (state, action) => {
      state.price += action.payload;
    },
    deletePrice: (state, action) => {
      state.price -= action.payload;
    },
    changeIndex: (state, action) => {
      state.currIndex = action.payload;
    },
    implementItemPrice: (state, action) => {
      state.value[action.payload].counter += 1;
      state.value[action.payload].sum += state.value[action.payload].price;

      state.itemPrice.push(state.value[action.payload].price);
    },
    decrementItemPrice: (state, action) => {
      state.value[action.payload].counter -= 1;
      state.value[action.payload].sum -= state.value[action.payload].price;
      state.itemPrice.splice(action.payload, 1);
      if (state.value[action.payload].counter <= 1) {
        state.value[action.payload].counter = 1;
        state.value[action.payload].sum = state.value[action.payload].price;
      }
    },
    sumCount: (state, action) => {
      state.sum.push(action.payload);
    },
    order: (state) => {
      state.sum = [];
      state.value = [];
      state.price = 0;
      state.itemPrice = [];
    },
    setPopap: (state, action) => {state.popap = action.payload},
  },
});

export const {
  setCard,
  setValue,
  order,
  deleteCardItem,
  countPrice,
  deletePrice,
  changeIndex,
  implementItemPrice,
  decrementItemPrice,
  sumCount,
  setPopap,
} = cardSlice.actions;
export default cardSlice.reducer;
