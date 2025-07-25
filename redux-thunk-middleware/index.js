
let {createStore , applyMiddleware} = require("redux") ;
let {thunk} = require("redux-thunk") ;

let todoState = {
    todos : [] ,
    isLoading : true ,
    error : null
}


function getTodoRequest ()
{
    return {
        type : "GET_TODO_REQUEST"
    }
}

function getTodoFailed (error)
{
    return {
        type : "GET_TODO_FAILED",
        payload : error ,
    }
}

function getTodoSuccess (data)
{
    return {
        type : "GET_TODO_SUCCESS" ,
        payload : data 
    }
}


function reducerFun (presentState=todoState , action)
{
    if(action.type === "GET_TODO_REQUEST")
    {
        return {
            ...presentState ,
            isLoading : true ,
            error : null 
        }
    }
    else if(action.type === "GET_TODO_SUCCESS")
    {
        return {
            todos : [...presentState.todos , action.payload] ,
            isLoading : false ,
            error : null
        }
    }
    else if(action.type === "GET_TODO_FAILED")
    {
        return {
            todos : [...presentState.todos] ,
            isLoading : false ,
            error : action.payload
        }
    }
}

// function fetchData()
// {
//     return function(dispatch){

//         dispatch(getTodoRequest()) ;

//         fetch("https://jsonplaceholder.typicode.com/todos" , {
//             method : "GET"
//         })
//         .then(function (r1){
//             if(r1.ok){
//                 return r1.json() ;
//             }
//         })
//         .then(function(r2){
//             console.log(r2)
//         })
//         .catch(function(err){
//             console.log(err.message)
//         })

//     }
// }


let store = createStore(reducerFun , applyMiddleware(thunk)) ;

store.subscribe(function(){
    console.log(store.getState()) ;
}) ;

store.dispatch(function(dispatch){

        dispatch(getTodoRequest()) ;

        fetch("https://jsonplaceholder.typicode.com/todos" , {
            method : "GET"
        })
        .then(function (r1){
            if(r1.ok){
                return r1.json() ;
            }
        })
        .then(function(r2){
            console.log(r2)
        })
        .catch(function(err){
            console.log(err.message)
        })

    }) ;




