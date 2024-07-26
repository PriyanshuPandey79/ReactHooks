import UseReducer from "./Hooks/useReducer/UseReducer.jsx";
import UseReducerHook from "./Hooks/useReducer/useReducerHook.jsx";

import UseStateHook from "./Hooks/useState/UseStateHook.jsx";
import UseStateHookExample from "./Hooks/useState/UseStateHookExample.jsx";
import UseStateHookreal from "./Hooks/useState/UseStateHookreal.jsx";


function App() {
  let count =0 ;
  return (
    <>
    <h1 className="text-2xl font-bold text-center">useState Hook</h1>
    <UseStateHook/>
    <hr/>
    <UseStateHookreal/>
    <UseStateHookExample/>

    <div>
    <h1 className="text-2xl font-bold text-center">useReducer Hook</h1>
    <UseReducer/>
    <hr/>
    <UseReducerHook/>
    </div>
    </>
  )
}

export default App
