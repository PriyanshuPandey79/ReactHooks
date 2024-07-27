import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function UseStateLanding() {
  return (
    <div className='content'>
      <h1 className='heading'>UseStateLanding</h1>
      <ul className='flex justify-center space-x-12'>
        <li>
          <Link to='useStateHook'>
            without useState
          </Link>
        </li>
        <li>
          <Link to='useStateHookreal'>
            using UseState
          </Link>
        </li>
        <li>
          <Link to='useStateHookExample'>
            Example case
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default UseStateLanding;
