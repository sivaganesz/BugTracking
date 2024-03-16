// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const T_Sidebar = () => {
  return (
    <div className="bg-blue-500 h-screen w-64 fixed left-0 top-0 pt-12 border border-red-800 border-2">
        <div className="p-4">
        <h1 className="text-black-400 font-bold text-4xl underline underline-offset-8 block py-2">Tester</h1>
        <ul className="mt-4">
          <li>
            <Link to="/" className="text-white font-bold text-2xl  block py-2">Your Work</Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-bold text-2xl  block py-2">Status Update</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default T_Sidebar;
