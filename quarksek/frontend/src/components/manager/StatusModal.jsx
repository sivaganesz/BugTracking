import React, { useState } from 'react';
import Welcome from '../../assets/welcome.png'
export const StatusModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 px-16 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Update Status</h2>
        <ul>
          <li><button className="bg-gray-700 mt-5 text-white px-1 py-1.5 rounded w-40">Test in Process</button></li>
          <li><button className="bg-red-700 mt-5 text-white px-1 py-1.5 rounded w-40">Testing blocked</button></li>
          <li><button className="bg-yellow-500 mt-5 text-black px-1 py-1.5 rounded w-40">Testing in process</button></li>
          <li><button className="bg-green-600 mt-5 text-white px-1 py-1.5 rounded w-40">Testing Completed</button></li>
        </ul>
        <button onClick={onClose} className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export const WelcomeManager = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleNotificationClose = () => {
    setShowNotification(false);
    
  };

  return (
    <>
      {showNotification && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 px-5 w-90 rounded-lg">
          <button onClick={handleNotificationClose} className="ml-64 border  text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <img src={Welcome} className='w-60 h-30 ml-5' alt="" />
            <p className="text-gray-700 text-center font-bold text-2xl">Welcome Manager</p><br/>
            
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeManager;
