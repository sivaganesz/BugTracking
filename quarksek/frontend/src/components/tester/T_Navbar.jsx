// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const T_Navbar = () => {
  return (
    <nav className="bg-blue-900 left-0 lg:ml-64 ml-48 p-4  border boder-white ">
        <div className="container  mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">Home</Link>
        <div className=" md:flex">
          <Link to="/about" className="text-white mx-4">Project</Link>
          <Link to="/contact" className="text-white mx-4">Goals</Link>
          {/* <Link to="/Request" className="text-white mx-4">Request</Link> */}
          

        </div>
      </div>
    </nav>
  );
};

export default T_Navbar;
