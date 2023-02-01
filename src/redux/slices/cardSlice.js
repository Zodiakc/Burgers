import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    card: false
}

export const cardSlice = createSlice({
    name: "cardPage",
    initialState,
    reducers:{
        setCardPage: (state, action)=>{
            state.card = action.payload
        }
    }
})

export const {setCard} = cardSlice.actions
export default cardSlice.reducer
