import {createStore} from "redux" ; 
import { reducerFun } from "../redux_manage/ReduxManage";

let myStore = createStore(reducerFun) ;

export {myStore}