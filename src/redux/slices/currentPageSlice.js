import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentPage: 1,
    limit: 8,
    amountPage: 2
}

export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers:{
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
        },
        setLimit: (state, action)=>{
            state.limit = action.payload
        },
        setAmountPage: (state,  action)=>{
            state.amountPage = action.payload
        }
    }
})

export const {setCurrentPage, setLimit, setAmountPage} = currentPageSlice.actions
export default currentPageSlice.reducer
