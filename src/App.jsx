import UseStateHook from "./Hooks/useState/UseStateHook.jsx";
import UseStateHookExample from "./Hooks/useState/UseStateHookExample.jsx";
import UseStateHookreal from "./Hooks/useState/UseStateHookreal.jsx";


function App() {
  let count =0 ;
  return (
    <>
    <h1 className="text-2xl font-bold text-center">UseState Hook</h1>
    <UseStateHook/>
    <hr/>
    <UseStateHookreal/>
    <UseStateHookExample/>
    </>
  )
}

export default App
