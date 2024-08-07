import React from 'react'
import withoutUseState01 from "../../assets/withoutUseState01.png";
import withoutUseState02 from "../../assets/withoutUseState02.png";

function UseStateHook() {
    
     let count=0;

    function increment(){
        count++;
        console.log("count new value =" , count);
        let val=document.getElementById("firstdiv");
        let val2=document.getElementById("firstptag");
        val.innerHTML=count;
        val2.innerHTML=count;

    }

    function decrement(){
        count--;
        console.log("count new value =" , count);
        let val=document.getElementById("firstdiv")
        let val2=document.getElementById("firstptag");
        val.innerHTML=count;
        val2.innerHTML=count;

    }
  return (
  <>
    <div className='heading2'>
    UseStateHook
    </div>

    <div id="firstdiv" className='content'>
        Count: {count}  
    </div>



    <div className='content'>
     <button 
        className="increment" 
        onClick={increment}

        >
        Increment
        </button>
        <button 
        className="decrement"
        onClick={decrement}
        >
        Decrement
        </button>
       </div>


        <p id='firstptag' className='content'>
        {count}
        </p>
    <hr/>
    <div className='flex justify-evenly p-10'>
    <img src={withoutUseState01}/>
    <img src={withoutUseState02} className='h-96'/>
    </div>
    
    
    
    </>
  )
}

export default UseStateHook