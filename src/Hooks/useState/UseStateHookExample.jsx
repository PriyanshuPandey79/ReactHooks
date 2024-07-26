import React,{useState} from 'react'

function UseStateHookExample() {
    const [inputValue, setInputValue] =useState("");

    function useStateUseCase(e){
    let val=e.target.value;
    setInputValue(val);
    }
  return (
    <>
    <div className='content'>

    <div className='heading2'>
    UseStateHook Example
    </div>


    <input className='input' 
    placeholder='Enter a value'
    onChange={(e)=>useStateUseCase(e)} 
    />
    <br/>
    {inputValue}
    </div>
    
    </>
  )
}

export default UseStateHookExample