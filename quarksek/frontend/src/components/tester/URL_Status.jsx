import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './T_Layout';

const URL_Status = () => {
  const [message, setMessage] = useState('');

  const handleRequestClick = () => {
    setMessage('Sending request...');

  };
  return (
    <Layout>
      <div className="mx-auto sm:w-80">
        <div className='container mt-40  mx-auto w-80 border-gray-300 border-8 px-20 py-8'>
          <table className=" text-center">
            <h1 className='bg-gray-300 px-2 py-2  text-black font-bold ' onClick={handleRequestClick}>Testing Process </h1><br />
            <Link to="/BugRaiseForm"><button className='bg-blue-700 px-4 py-2 rounded text-white '>Create new Bug</button></Link>
          </table>
        </div>
        {message && <p className="mt-6 text-center text-lg font-bold">{message}</p>}

      </div>
    </Layout>
  );
};

export default URL_Status;

