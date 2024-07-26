import React from 'react'
import { useState } from 'react'

function UseReducer() {

    const [count,setCount] = useState(0);
    const [showText,setShowText] =useState(true);

    function increment(){
        setCount(count+1);
        setShowText(!showText); 
    }

  return (
    <div className='content'>
        <h1 className='heading2'>useReducer Hook (using useState)</h1>
        <p>It can be seen as an alternative or a replacement to the useState hook.
         We can say this also is used to create variables and render their values whenever they get changed
         </p>
       <div>
        Count:{count}
        <button className='increment'
        onClick={increment}
        >
        Increment
        </button>
        
        {showText && <p>This is a text</p>}
        </div> 
    </div>
  )
}

export default UseReducer