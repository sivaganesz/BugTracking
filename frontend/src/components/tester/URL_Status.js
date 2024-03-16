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
      <div className="mx-auto">
        <div className='container mt-40  mx-auto w-80 border border-8 px-20 py-8'>
          <table className=" text-center">
            <button className='bg-pink-700 px-2 py-2 rounded text-white ' onClick={handleRequestClick}>Testing Process </button><br /><br /><br />
            <Link to="/BugRaiseForm"><button className='bg-blue-700 px-4 py-2 rounded text-white '>Create new Bug</button></Link>
          </table>
        </div>
        {message && <p className="mt-6 text-center text-lg font-bold">{message}</p>}

      </div>
    </Layout>
  );
};

export default URL_Status;

