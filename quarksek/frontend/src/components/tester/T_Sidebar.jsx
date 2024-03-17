// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const T_Sidebar = () => {
  return (
    <div className="bg-blue-900 h-screen w-48 lg:w-64 fixed left-0 top-0 pt-5 border border-white-800 ">
        <div className="p-4">
        <h1 className='text-black text-3xl font-bold border border-black w-40  py-2 px-2 rounded-xl bg-gray-300'>QuarkSek</h1><br/>

        <h1 className="text-white text-2xl font-bold underline underline-offset-8">TESTER</h1>
        <ul className="mt-4">
          <li>
            <Link to="" className="text-white font-semibold text-2xl  block py-2">Your Work</Link>
          </li>
          <li>
            <Link to="" className="text-white font-semibold text-2xl  block py-2">Status Update</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default T_Sidebar;
