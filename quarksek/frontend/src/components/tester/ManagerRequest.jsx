import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './T_Layout';
const ManagerRequest = () => {

  const [message, setMessage] = useState('');

  const handleRequestClick = () => {
    setMessage('Sending request...');
  };

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-2xl ml-28 font-bold">Request</h1>
        <div className='ml-60'>

          <div className="my-8 flex ">
            <label className="block  font-bold text-lg text-gray-700">Client URL:</label>
            <h3 className='ml-10 font-semibold'>www.google.com</h3>
          </div>

          <div className="my-4 flex">
            <label className="block font-bold text-lg  text-gray-700">Credentials:</label>
            <h3 className='ml-8 font-semibold'>sivaganesz   / 98787654</h3>
          </div>

          <Link to="/URL_Status" className="text-white block py-2">
            <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-lg	 rounded mt-6" onClick={handleRequestClick}>Check </button>
          </Link>
          {message && <p className="mt-6 text-lg font-bold">{message}</p>}

        </div>
      </div>
    </Layout>
  );
};
export default ManagerRequest;
