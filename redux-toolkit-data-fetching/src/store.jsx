import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./features/todo-app/todosSlice";

let myStore = configureStore({
    reducer : {
        todosSlice
    }
})

export {myStore}