
import {createStore} from "redux" ;

let allState = {

    counter : 0 

}

function incrementAction ()
{
    return {
        type : "INCREMENT" ,
    }
}

function decrementAction ()
{
    return {
        type : "DECREMENT" ,
    }
}

function incrementAction_withValue (value)
{
    return {
        type : "INCREMENT_WITH_VALUE" ,
        payload : value
    }
}

function reducerFun (presentState=allState , action)
{
    if(action.type === "INCREMENT")
    {
        return {
            ...presentState ,
            counter : presentState.counter + 1 
        }
    }
    else if(action.type === "DECREMENT")
    {
        return {
            ...presentState ,
            counter : presentState.counter - 1 
        }
    }
    else if(action.type === "INCREMENT_WITH_VALUE")
    {
        return {
            ...presentState ,
            counter : presentState.counter + action.payload 
        }
    }
    else
    {
        return presentState ;
    }
}


let store = createStore(reducerFun) ;

store.subscribe(function(){
    console.log(store.getState()) ;
}) ;

store.dispatch(incrementAction()) ; //1 
store.dispatch(incrementAction()) ; //2 
store.dispatch(incrementAction()) ; //3
store.dispatch(decrementAction()) ; //2
store.dispatch(incrementAction_withValue(5)) ; //7


