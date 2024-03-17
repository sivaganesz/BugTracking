
import React, { useState } from 'react';
import { ReactComponent as RightTick } from '../../assets/right-tick.svg';
import { Link } from 'react-router-dom';
export const SelectTestingStatus = () => {
  const [showPopup, setShowPopup] = useState(false); 

  const handleSendBugraise = () => {
 
    setShowPopup(true);

  };

  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 px-16 rounded-lg">
        <label htmlFor="testingStatus" className="block text-sm font-medium text-gray-700 text-center ">Change Process:</label>
        <select id="testingStatus" className="mt-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option  value="" disabled selected>Select</option>
          <option  value="Under Review">Under Review</option>
          <option className="bg-gray-700 mt-10 text-white px-1 py-1.5 rounded w-40"   value="Testing Completed">  Testing Completed</option>
          <option className="bg-red-700 mt-10 text-white px-1 py-1.5 rounded w-40"    value="Request Accepted">   Request Accepted</option>
          <option className="bg-yellow-500 mt- text-black px-1 py-1.5 rounded w-40" value="Testing In Progress">Testing In Progress</option>
          <option className="bg-green-600 mt-5 text-white px-1 py-1.5 rounded w-40"  value="Testing Blocked">    Testing Blocked</option>
        </select>
        <button className="bg-green-600 mt-5 text-white px-1 py-1.5 rounded w-40" onClick={handleSendBugraise}>send</button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-md">
            <div className="flex items-center justify-center">
              <RightTick className="w-8 h-12 text-green-500 mr-2" />
              <p className="text-green-500 font-semibold">Status Update successfully!</p>
            </div>
           <Link to="/CustomerRequest"> <button className="block mx-auto mt-4 bg-blue-900 text-white px-4 py-1 font-semibold rounded" onClick={() => setShowPopup(false)}>Close</button></Link>
          </div>
        </div>
      )}
    </div>
    
  );
}
