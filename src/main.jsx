import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UseStateHook from './Hooks/useState/UseStateHook.jsx'
import UseStateHookreal from './Hooks/useState/UseStateHookreal.jsx'
import UseStateHookExample from './Hooks/useState/UseStateHookExample.jsx'
import UseReducer from './Hooks/useReducer/UseReducer.jsx'
import UseEffect from './Hooks/useEffect/UseEffect.jsx'
import UseStateLanding from './Hooks/useState/UseStateLanding.jsx'
import UseRef from './Hooks/useRef/UseRef.jsx'
import UseLayoutEffect from './Hooks/useLayoutEffect/UseLayoutEffect.jsx'

const reactRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      
    <Route element={<UseStateLanding/>} path='/useState' >

    <Route element={<UseStateHook/>} path='useStateHook' />
    <Route element={<UseStateHookreal/>} path='useStateHookreal' />
    <Route element={<UseStateHookExample/>} path='useStateHookExample' />
    </Route>
    
    <Route element={<UseReducer/>} path='/useReducer' />
    <Route element={<UseEffect/>} path='/useEffect' />
    <Route element={<UseRef/>} path='/useRef' />
    <Route element={<UseLayoutEffect/>} path='/useLayoutEffect' />
  </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={reactRouter}/>
   
)
