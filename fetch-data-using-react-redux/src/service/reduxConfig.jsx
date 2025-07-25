
let todoState = {

    todos : [] ,
    isLoading : true ,
    error : null

}


function getTodoRequest()
{
    return {
        type : "GET_TODO_REQUEST"
    }
}

function getTodoSuccess(data)
{
    return {
        type : "GET_TODO_SUCCESS" ,
        payload : data
    }
}

function getTodoFailed(err)
{
    return {
        type : "GET_TODO_FAILED" ,
        payload : err
    }
}


function reducerFun (presentState=todoState , action)
{

    if(action.type === "GET_TODO_REQUEST")
    {
        return {
            ...presentState 
        }
    }
    else if(action.type === "GET_TODO_SUCCESS")
    {
        return {
            todos: action.payload, 
            isLoading: false,
            error: null
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
    else
    {
        return presentState
    }

}


export {todoState , getTodoRequest , getTodoSuccess , getTodoFailed , reducerFun}