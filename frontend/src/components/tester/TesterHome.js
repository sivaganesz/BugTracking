import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './T_Layout';

const TesterHome = () => {
  const [customerMessages, setCustomerMessages] = useState([
    "Request message 1 ",
  ]);
  const [showNotification, setShowNotification] = useState(false);

  const addNewMessage = () => {
    const newMessage = `Request message ${customerMessages.length + 1}`;
    setCustomerMessages([...customerMessages, newMessage]);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <Layout>
      <div className=''>
        <h1 className='text-2xl font-semibold ml-16 mt-6'>Requests</h1>
        <div className="mt-4">
          {showNotification && <p className="bg-gray-800 text-white w-60 px-4 py-2 ml-auto  rounded mt-4">New message added!</p>}

          <Link to="/ManagerRequest" className=''>{customerMessages.map((message, index) => (
            <p key={index} className="bg-blue-700 hover:bg-green-600 text-white px-6 py-2 w-1/4 rounded ml-10 mt-4">{message}</p>
          ))}</Link>
          <button onClick={addNewMessage} className="bg-blue-700 hover:bg-green-600 text-white px-6 py-2 rounded ml-10 mt-4">Click me</button>

        </div>
      </div>
    </Layout>
  );
};

export default TesterHome;
