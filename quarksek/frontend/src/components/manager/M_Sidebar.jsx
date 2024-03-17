// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { PiNumberCircleOneFill } from "react-icons/pi";

const M_Sidebar = () => {
  return (
  
    <div className="bg-blue-900 h-screen w-48 lg:w-64 fixed left-0 top-0 pt-3 border border-white">
        <div className="p-4">
        <h1 className='text-black text-3xl font-bold border border-black w-40  py-2 px-2 rounded-xl bg-gray-300'>QuarkSek</h1><br/>

        <h1 className="text-white text-3xl font-semibold ">Project<p className='underline underline-offset-8'>Manager</p> </h1>
        <ul className="mt-4">
        <li className='flex'>
            <Link to="/CustomerRequest" className="text-orange-400 font-bold md:text-1xl lg:text-2xl block py-2 flex">CustomerRequest<PiNumberCircleOneFill  className='text-white mt-2 ml-1'/></Link>
          </li>
          <li>
            <Link to="/AssignTester" className="text-orange-400 font-bold md:text-1xl lg:text-2xl block py-2">Tester</Link>
          </li>
          <li>
          </li>
        </ul>

      </div>
    </div>

  );
};

export default M_Sidebar;
