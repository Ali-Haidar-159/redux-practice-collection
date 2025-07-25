let {createStore , applyMiddleware} = require("redux") ;
let {logger} = require("redux-logger") ;

let productState = {
    products : ["sugar" , "salt"] ,
    numberOfProducts : 2
}

function addProducts (product)
{
    return {
        type : "ADD" ,
        payload : product 
    }
}


function getProducts ()
{
    return {
        type : "GET"
    }
}


function productReducer (presentState=productState , action)
{
    if(action.type === "GET")
    {
        return {
            ...presentState ,
        }
    }
    else if(action.type === "ADD")
    {
        return {
            products : [...presentState.products , action.payload] ,
            numberOfProducts : presentState.numberOfProducts + 1 
        }
    }
    else
    {
        return presentState
    }
}


// let store = createStore(productReducer) ; //without middleware 

let store = createStore(productReducer , applyMiddleware(logger)) ;


store.subscribe(function(){
    console.log(store.getState()) ;
}) ;


store.dispatch(getProducts()) ;
store.dispatch(addProducts("Onion")) ;








