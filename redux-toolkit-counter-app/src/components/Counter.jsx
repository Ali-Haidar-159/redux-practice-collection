import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../features/counter-app/counterSlice";


function Counter ()
{

    let count = useSelector(function(state){
        return state.counterSlice.count
    }) ;

    // console.log(count)

    let dispatch = useDispatch() ;

    return (<>
    
        <h1>Count : {count} </h1>
        <button onClick={function(){

            dispatch(increment())

        }}>Increase</button>

        <button onClick={function(){

            dispatch(decrement())

        }}>Decrement</button>

        <button onClick={function(){

            dispatch(reset())

        }}>Reset</button>
        
    </>)

}

export {Counter}