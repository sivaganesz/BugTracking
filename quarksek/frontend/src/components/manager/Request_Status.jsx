import React from 'react';
import { useState } from 'react';
import M_Layout from './M_Layout';
const Request_Status = () => {
  const [message, setMessage] = useState('');

  const handleRequestClick = () => {
    setMessage('Sending request...');
  };
  return (
    <M_Layout>
      <div className="container mt-40  mx-auto w-80 border border-8 px-16 py-8">
        <table className=" text-center">
          <button className='bg-blue-700 px-2 py-2 rounded text-white ' onClick={handleRequestClick}> Request Under Review </button><br /><br /><br />
          <div className='bg-blue-700 px-4 py-2 round'>
            <h1 className='text-white'>Request Accepted</h1>
            <select className='w-30'>
              <option selected disabled >choose request</option>
              <option>Test in Process   </option>
              <option>Testing blocked   </option>
              <option>Testing in process</option>
              <option>Testing Computed  </option>
            </select></div>

        </table>
        {message && <p className="mt-6 text-lg font-bold">{message}</p>}
      </div>
    </M_Layout>
  );
};

export default Request_Status;
