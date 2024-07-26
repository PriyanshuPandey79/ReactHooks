import React,{useState} from 'react'

function UseStateHookreal() {
  
  const [count,setCount]=useState(0);

  function increment(){
    let val=count+1;
    setCount(val);
    // count++;
  }

  function decrement(){
    let val=count-1;
    setCount(val);
  }

  return (
    <>
    <div className='heading'>
    UseStateHook
    </div>

    <div id="firstdiv" className='content'>
    Count: {count}  
    </div>

    
    <div className='content'>
    <button 
        className='increment' 
        onClick={increment}
        >
        Increment
        </button>
        <button 
        className='decrement'
        onClick={decrement}
        >
        Decrement
        </button>

    </div>
    
        <p id='firstptag' className='content'>
        count: {count}
        </p>

        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
    
    </>
  )
}

export default UseStateHookreal