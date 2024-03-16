import React from 'react';

const StatusModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex  justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 px-16 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Update Status</h2>
        <ul>
          <li><button className="bg-gray-700 mt-5   text-white px-1 py-1.5 rounded w-40">Test in Process</button></li>
          <li><button className="bg-red-700 mt-5    text-white px-1 py-1.5 rounded w-40">Testing blocked</button></li>
          <li><button className="bg-yellow-500 mt-5 text-black px-1 py-1.5 rounded w-40">Testing in process</button></li>
          <li><button className="bg-green-600 mt-5  text-white px-1 py-1.5 rounded w-40">Testing Completed</button></li>
        </ul>
        <button onClick={onClose} className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default StatusModal;
