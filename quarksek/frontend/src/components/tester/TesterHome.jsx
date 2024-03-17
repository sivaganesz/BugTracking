import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './T_Layout';
import { BiSolidNotification } from "react-icons/bi";


const TesterHome = () => {

  return (
    <Layout>
      <div className=''>
        <h1 className='text-2xl font-semibold ml-16 mt-6'>Requests</h1>
        <div className="mt-4">
          <Link to="/ManagerRequest">
            <div className="bg-gray-300 w-60 fixed md text-white rounded py-2 ml-10 mt-4 flex">
              <div className='ml-3 '>
                <h1 className='text-blue-800 flex font-semibold mr-ml-3 mx-auto sm:mr-0'>
                  <BiSolidNotification color='black' size={20} className='mt-1' />sivaganesz@customer_01<br /></h1>
              </div>
            </div> 
            </Link>
        </div>
      </div>
    </Layout>
  );
};

export default TesterHome;
