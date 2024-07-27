import React, { useRef, useState } from 'react';
import useRefImg from './../../assets/useRefImg.png'

function UseRef() {
    const inputRef=useRef();
    const[showValue,setShowValue]=useState("");

    function Onclick(){
       inputRef.current.focus();
       console.log(inputRef); //this stores only the current object
       console.log(inputRef.current); //inputRef.current shows the input tag in console
       setShowValue(inputRef.current.value); //just like we do onChange listener and do e.target.value
    }

  return (
    <div className='content'>
        {/* pass the variable created through useRef to the concerned input tag */}
        <input type='text' className='input' placeholder='Enter value' ref={inputRef}/>
        <button onClick={Onclick}
        className='btn'
        >Change name</button>
        <p>{showValue}</p>
        <img src={useRefImg} className='img'/>
    </div>
  )
}

export default UseRef