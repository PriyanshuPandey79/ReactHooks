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

    <div className='heading'>
    UseStateHook Example
    </div>


    <input className='input' 
    placeholder='Write something here ...'
    onChange={(e)=>useStateUseCase(e)} 
    />
    <br/>
    {inputValue}
    </div>
    


    <hr/>
    <hr/>
    <hr/>
    <hr/>
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

export default UseStateHookExample