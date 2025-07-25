let {createStore, combineReducers} = require("redux") ;

// create state 
// create actions 
// create reducer function 
// store all the state 

let productState = {
    products : ["sugar" , "salt"] ,
    numberOfProducts : 2
}

let cartState = {
    carts : ["Oil"] ,
    numberOfCarts : 1
}

function getProducts ()
{
    return {
        type : "GET"
    }
}

function addProducts (product)
{
    return {
        type : "ADD" ,
        payload : product
    }
}

function getCart ()
{
    return {
        type : "GET"
    }
}

function addCart (cart)
{
    return {
        type : "ADD" ,
        payload : cart
    }
}


function productReducer (presentState=productState , action)
{
    switch(action.type)
    {
        case "GET" : {
            return presentState ;
        }
        case "ADD" : {
            return {
                products : [...presentState.products , action.payload] ,
                numberOfProducts : presentState.numberOfProducts + 1 
            }
        }
        default : {
            return presentState;
        }
    }
}

function cartReducer (presentState=cartState , action)
{
    switch(action.type)
    {
        case "GET" : {
            return presentState ;
        }
        case "ADD" : {
            return {
                carts : [...presentState.carts , action.payload] ,
                numberOfCarts : presentState.numberOfCarts + 1 
            }
        }
        default : {
            return presentState;
        }
    }
}

let rootReducer = combineReducers({
    productReducer , 
    cartReducer
})


let store = createStore(rootReducer) ;

store.subscribe(function(){
    console.log(store.getState()) ;
}) ;

store.dispatch(getProducts()) ;
store.dispatch(addProducts("pen")) ;

store.dispatch(getCart()) ;
store.dispatch(addCart("Onion")) ;





