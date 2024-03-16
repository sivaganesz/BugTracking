// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const CustomerSidebar = () => {
  return (
    <div className="bg-blue-900 h-screen w-64 fixed left-0 top-0 pt-12 border border-white-800 border-2">
        <div className="p-4">
        <h1 className="text-white text-lg font-bold underline">CUSTOMER</h1>
        <ul className="mt-4">
          <li>
            <Link to="/" className="text-white block py-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white block py-2">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white block py-2">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerSidebar;
