import React,{useState} from 'react';
import withoutUseState01 from "../../assets/withUseState01.png";
import withoutUseState02 from "../../assets/withUseState02.png";

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

    <div className='flex justify-evenly p-10'>
    <img src={withoutUseState01}/>
    <img src={withoutUseState02} className='h-96'/>
    </div>
    
    </>
  )
}

export default UseStateHookreal