import React,{useEffect, useState} from 'react';
import axios from 'axios';

function UseEffect() {

  const [data, setData]=useState("")
  const [count,setCount] =useState(0);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response)=>{setData(response.data[count].email)});
  },
  [count]); 
  
  const increment=()=>{
    setCount(count+1);
  }
  return (
    <div className='content'>
    <h1 className='heading'>useEffect Hook</h1>
    <p className='text-rose-600'>Here we are calling an api using the useEffect hook which calls the function or fetches api 
       depeneding upon the change in value of variable count.
    </p>
    Email:
    <p className='text-blue-500 border-2 border-blue-900 rounded-lg'>  {data} </p>
    is coming from API.
    <p className='btn'>Count: {count}</p>
    <button 
    className='increment'
    onClick={increment}
    >
    Increment
    </button>
    </div>

  )
}

export default UseEffect