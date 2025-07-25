import { createSlice } from "@reduxjs/toolkit";


export let counterSlice = createSlice({
    name : "counter" ,
    initialState : {
        count : 0 
    } ,
    reducers : {
        increment : function(state){
            state.count = state.count + 1 
        } ,
        decrement : function (state){
            state.count = state.count - 1  
        } ,
        reset : function(state){
            state.count = 0 
        }
    }
})

export default counterSlice.reducer
export let { increment, decrement, reset } = counterSlice.actions;