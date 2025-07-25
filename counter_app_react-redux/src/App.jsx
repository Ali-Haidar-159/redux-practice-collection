import { Provider } from "react-redux"
import { Counter } from "./components/Counter"
import { myStore } from "./redux-store/store"


function App ()
{

    return (

        <div>

            <Provider store={myStore}>

                <Counter />

            </Provider>

        </div>

    )

}


export {App}