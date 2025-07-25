import { useDispatch, useSelector } from "react-redux"
import { incrementCount } from "../redux_manage/ReduxManage";


function Counter ()
{

    let count = useSelector(function(state){
        return state.count ;
    }) ;

    let dispatch = useDispatch() ;


    function handler ()
    {
        dispatch(incrementCount()) ;
    }

    return (<>
    
        <h1>Count : {count}</h1>
        <button onClick={handler}>Increase</button>

    </>)

}

export {Counter}