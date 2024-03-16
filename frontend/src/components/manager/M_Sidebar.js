// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const M_Sidebar = () => {
  return (
    <div className="bg-blue-300 h-screen w-64 fixed left-0 top-0 pt-12 border border-black border-2">
        <div className="p-4">
        <h1 className="text-black text-3xl font-bold ">Project Manager</h1>
        <ul className="mt-4">
        <li>
            <Link to="/CustomerRequest" className="text-red-800 font-bold text-2xl block py-2">Customer Request</Link>
          </li>
          <li>
            <Link to="/AssignTester" className="text-red-800 font-bold text-2xl block py-2">Tester</Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default M_Sidebar;
