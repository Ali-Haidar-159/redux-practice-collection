
let {createStore} = require("redux") ;

// create state :
let counterState = {
    counter : 0
}


// create actions :

function incrementAction (){

    return {
        type : "INCREMENT"
        }

}

function decrementAction (){

    return {
        type : "DECREMENT"
        }

}


function reducer (presentState = counterState , action)
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
    else
    {
        return presentState ;
    }

}


let store = createStore(reducer) ;

store.subscribe(function(){

    console.log(store.getState()) ;

})

store.dispatch(incrementAction()) ;


