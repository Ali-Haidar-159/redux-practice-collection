
let counterState = {
    count : 0 
}

function incrementCount ()
{
    return {
        type : "INCREMENT"
    } 
}

function reducerFun (presentState=counterState , action)
{
    if(action.type === "INCREMENT")
    {
        return {
            ...presentState ,
            count : presentState.count + 1 
        }
    }
    else
    {
        return presentState
    }
}

export {incrementCount , reducerFun}