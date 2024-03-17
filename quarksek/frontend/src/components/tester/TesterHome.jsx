import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './T_Layout';
import { BiSolidNotification } from "react-icons/bi";
import bugimg from '../../assets/bug.png';

const TesterHome = () => {
  return (
    <Layout>
      <div className=''>
        <h1 className='text-3xl font-bold ml-10 mt-7 underline underline-offset-8'>Tester Dashboard</h1>
        <h1 className='text-2xl font-semibold ml-10 mt-7 text-gray-700 '>Request Message</h1>

        <div className="mt-4">
          <Link to="/ManagerRequest">
            <div className="bg-gray-300 w-60 md:text-white rounded py-2 ml-10 mt-4 flex">
              <div className='ml-3 '>
                <h1 className='text-blue-800 flex font-semibold mr-ml-3 mx-auto sm:mr-0'>
                  <BiSolidNotification color='black' size={20} className='mt-1' />sivaganesz@customer_01<br /></h1>
              </div>
            </div>
          </Link>
        </div>

        <img src={bugimg} className='absolute h- w-90 right-60  top-28' alt="" />
      </div>
    </Layout>
  );
};

export default TesterHome;
