import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../features/todo-app/todosSlice";


function Counter ()
{

    let {error , isLoading , todos} = useSelector(function(state){
        return state.todosSlice ;
        // console.log(state)
    }) ;

    // console.log(isLoading)

    let dispatch = useDispatch() ;

    useEffect(function(){

        dispatch(fetchData()) ;

    } , [])

    return (<>
    
        {isLoading && <h1>Loading ...</h1>}
        {error && <h1>{error}</h1>}
        {todos.map(function(item , index){
            return <p key={index}>{item.title}</p>
        })}
        
    </>)

}

export {Counter}