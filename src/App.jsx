import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <ul className='flex space-x-12 p-10'>
        <li><Link to='/useState'>useState</Link></li>
        <li><Link to='/useReducer'>useReducer</Link></li>
        <li><Link to='/useEffect'>useEffect</Link></li>
        <li><Link to='/useRef'>useRef</Link></li>
        <li><Link to='/useLayoutEffect'>useLayoutEffect</Link></li>
      </ul>
      <Outlet />
      
    </>
  );
}

export default App;
 