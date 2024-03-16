// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const M_Navbar = () => {
  return (
    <nav className="bg-blue-300 left-0 ml-60 p-4  border border-black border-2">
      <div className="container text-black  mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">Home</Link>
        <div className=" md:flex">
          <Link to="" className="text-white mx-4">About</Link>
          <Link to="" className="text-white mx-4">Contact</Link>
          {/* <Link to="" className="text-white mx-4">Request</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default M_Navbar;
