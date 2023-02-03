import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  card: false,
  value: [],
  price: 0,
  currIndex: 0,
  itemPrice: [],
  sum: []
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
    clearValue: (state) => {
      state.value = [];
      state.price = 0;
      state.sum = []
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
      
      state.itemPrice.push(state.value[action.payload].price)
    },
    decrementItemPrice: (state, action) => {
      state.value[action.payload].counter -= 1;
      state.value[action.payload].sum -= state.value[action.payload].price;
      if (state.value[action.payload].counter <= 1) {
        state.value[action.payload].counter = 1;
        state.value[action.payload].sum = state.value[action.payload].price ;
      }
    },
    sumCount: (state, action)=>{
      state.sum.push(action.payload)
    }
  },
});

export const {
  setCard,
  setValue,
  clearValue,
  deleteCardItem,
  countPrice,
  deletePrice,
  changeIndex,
  implementItemPrice,
  decrementItemPrice,
  sumCount
} = cardSlice.actions;
export default cardSlice.reducer;
