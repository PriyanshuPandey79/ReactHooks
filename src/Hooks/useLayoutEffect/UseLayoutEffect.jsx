import React,{useLayoutEffect, useEffect, useRef} from 'react'
import  useLayoutEffectImg  from '../../assets/useLayoutEffect.png'

function UseLayoutEffect() {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.value="Hello"
    },[]);
    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);
  return (
    <>
    <div className='heading'>UseLayoutEffect</div>
    <input ref={inputRef} className='input border-2' value="PEDRO"/>
    <img src={useLayoutEffectImg} />
    </>
  )
}

export default UseLayoutEffect;