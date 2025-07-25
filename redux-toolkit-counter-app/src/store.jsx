import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter-app/counterSlice";

let myStore = configureStore({
    reducer : {
        counterSlice
    }
})

export {myStore}