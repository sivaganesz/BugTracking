import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const URL_Request = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [credentials, setCredentials] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const addNewMessage = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate("/Send_Request_Manager");
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
      {showNotification && <p className="bg-gray-800 text-white w-40 px-4 py-2 ml-auto mr-5 rounded">Message Sent!</p>}

        <h1 className="text-2xl ml-28 font-bold">CUSTOMER REQUEST</h1>
        <div className="flex justify-center items-center mt-20">
          <div className='border border-black w-1/2'>
            <div className='text-center mb-9'>
              <form onSubmit={addNewMessage}>
                <div className="my-8">
                  <label className="block font-bold text-lg text-gray-700">Enter the URL:</label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-4 p-2 border border-gray-300 rounded-md w-80"
                    placeholder="Enter URL"
                    required
                  />
                </div>
                <div className="my-4">
                  <label className="block font-bold text-lg text-gray-700">Credentials:</label>
                  <input
                    type="text"
                    value={credentials}
                    onChange={(e) => setCredentials(e.target.value)}
                    className="mt-4 p-2 border border-gray-300 rounded-md w-80"
                    placeholder="Enter Credentials"
                    required
                  />
                </div>
                <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-lg rounded mt-6" type="submit">Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default URL_Request;
