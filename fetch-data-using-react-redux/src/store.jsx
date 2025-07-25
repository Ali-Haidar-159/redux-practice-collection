import {applyMiddleware, createStore} from "redux" ;
import { thunk } from "redux-thunk" ;

import { reducerFun } from "./service/reduxConfig" ;

let myStore = createStore(reducerFun , applyMiddleware(thunk))

export {myStore}



