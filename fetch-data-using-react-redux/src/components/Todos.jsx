import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTodoFailed, getTodoRequest, getTodoSuccess } from "../service/reduxConfig";


function Todos ()
{

    let {isLoading , todos , error} = useSelector(function(state){
        return state ;
    })

    // console.log(myState)

    let dispatch = useDispatch() ;

    useEffect(function(){

        dispatch(function(dispatch){

            dispatch(getTodoRequest()) ;

            fetch("https://jsonplaceholder.typicode.com/todos" , {
                method : "GET"
            })
            .then(function(r1){
                if(r1.ok)
                {
                    return r1.json() ;
                }
            })
            .then(function(r2){
                dispatch(getTodoSuccess(r2)) ;
                // console.log(r2) ;
            })
            .catch(function(err){
                dispatch(getTodoFailed(err))
            })

        })

    } , [])

    return (<>
    
        {isLoading && <h1>Loading ... </h1>}
        {error && <h1>{error.message}</h1>}
        {todos.map(function(item,index){
            return <p key={index}>{item.title}</p>
        })}
    
    </>)
}



export {Todos}