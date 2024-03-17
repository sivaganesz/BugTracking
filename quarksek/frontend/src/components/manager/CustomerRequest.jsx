import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import M_Layout from './M_Layout';
import { BiSolidNotification } from "react-icons/bi";
import crimg from '../../assets/clientrequest.jpg'
import managerImage from '../../assets/manager1.png'


const CustomerRequest = () => {

  return (
    <M_Layout>
      <div className="container ml-3 mt-2 mx-auto fixed py-4">
        <div className="ml-4 ">
          <h1 className='text-2xl font-bold ml-10  underline underline-offset-4'>Under Review</h1>
          <Link to="/ShowMessage"><br/>
            <div className="bg-gray-300 w-60 fixed md text-white rounded py-2 ml-10 mt-4 flex">
              <div className='ml-3 '>
                <h1 className='text-blue-800 flex font-semibold mr-ml-3 mx-auto sm:mr-0'><BiSolidNotification color='black' size={20} className='mt-1' />sivaganesz@customer_01<br /></h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center h-44 ">
                <img src={crimg} className="h-90 w-90 mt-10 ml- object-cover" alt="" />
          </div>

        <div className="ml-16 mb-0 underline underline-offset-8">
          <h1 className="text-2xl font-bold">In Progress</h1>
          {/* Add a button here */}
          <button className="bg-orange-600 hover:bg-green-600 text-white py-2 px-4 rounded mt-6">
            Testing In Progress
          </button>
        </div>
      </div>
    </M_Layout>
  );
};

export default CustomerRequest;
