import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Search",
    initialState:{
        search:null,
    },
    reducers:{
        addSearchProduct:(state,action)=>{
            state.search=action.payload;
        } 
    }   
})

export const {addSearchProduct} = cartSlice.actions
export default cartSlice.reducer