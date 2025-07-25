import { Provider } from "react-redux"
import { Todos } from "./components/Todos"
import { myStore } from "./store"


function App ()
{
    return (

        <Provider store={myStore}>

            <div>

                <Todos />

            </div>

        </Provider>

    )
}

export {App} 