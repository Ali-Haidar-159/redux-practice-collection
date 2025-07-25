import { Provider } from "react-redux"

import { myStore } from "./store"
import {Counter} from "./components/Counter"

function App ()
{
    return (
    
    <Provider store={myStore}>

        <div>

            <Counter />

        </div>

    </Provider>

    )
}


export {App}