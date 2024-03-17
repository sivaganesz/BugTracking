// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const M_Navbar = () => {
  return (
    <nav className="bg-blue-900 left-0 lg:ml-64 ml-48 p-4  border border-white">
      <div className="container text-black  mx-auto flex ">
   
        <Link to="/manager" className="text-white font-bold ml-10">Home</Link>

        <Link to="/manager" className="text-white font-bold ml-10">Projects</Link>
        <Link to="/manager" className="text-white font-bold ml-10">Goals</Link>
        <Link to="/manager" className="text-white font-bold ml-10">Team</Link> 
        </div>
    </nav>
  );
};

export default M_Navbar;
