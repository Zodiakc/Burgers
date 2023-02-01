import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentPage: 1
}

export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers:{
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
        }
    }
})

export const {setCurrentPage} = currentPageSlice.actions
export default currentPageSlice.reducer
