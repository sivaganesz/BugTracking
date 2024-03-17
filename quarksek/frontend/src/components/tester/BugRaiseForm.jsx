import React, { useState } from 'react';
import Layout from './T_Layout';
import { ReactComponent as RightTick } from '../../assets/right-tick.svg';
import { Link } from 'react-router-dom';


const BugRaiseForm = () => {
  const [bugraise, setBugraise] = useState('');
  const [summary, setSummary] = useState('');
  const [severity, setSeverity] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State variable to control the visibility of the popup

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const handleSendBugraise = () => {
    if (!bugraise || !summary || !severity) {
      alert('Please fill all the fields');
      return; // Exit the function if any field is empty
    }
    setShowPopup(true);
    // Reset form fields after sending
    setBugraise('');
    setSummary('');
    setSeverity('');
  };

  const getSeverityColor = () => {
    switch (severity) {
      case 'High':
        return 'font-bold text-xl text-red-600';
      case 'Medium':
        return 'font-bold text-xl text-yellow-500';
      case 'Low':
        return 'font-bold text-xl text-green-600';
      default:
        return '';
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="text-3xl ml-20 mt-10 underline underline-offset-8 font-bold text-blue-900">
          BUGRAISE
        </h1>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg mt-8 border border-red-700 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Bugraise Form</h2>
          <div className="mb-4">
            <label className="block text-gray-700 ">Bug:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={bugraise}
              onChange={(e) => setBugraise(e.target.value)}
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Summary:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Severity:</label>
            <div>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  value="High"
                  checked={severity === 'High'}
                  onChange={handleSeverityChange}
                />
                <span className={`ml-2`}>High</span>
              </label>
              <label className="inline-flex items-center mt-2 ml-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  value="Medium"
                  checked={severity === 'Medium'}
                  onChange={handleSeverityChange}
                />
                <span className={`ml-2`}>Medium</span>
              </label>
              <label className="inline-flex items-center mt-2 ml-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  value="Low"
                  checked={severity === 'Low'}
                  onChange={handleSeverityChange}
                />
                <span className={`ml-2 `}>Low</span>
              </label>
            </div>
          </div>
          {severity && (
            <div>
              <label className="block text-gray-700">Selected Severity:</label>
              <span className={`ml-2 ${getSeverityColor()}`}>{severity}</span>
            </div>
          )}
          <div className='flex'>
            <button className="bg-blue-900 text-white px-4 py-1 font-semibold rounded mt-5" onClick={handleSendBugraise}>SEND</button>
          </div>
        </div>
    
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg border border-gray-300 shadow-md">
            <div className="flex items-center justify-center">
              <RightTick className="w-8 h-12 text-green-500 mr-2" />
              <p className="text-green-500 font-semibold">Bug raised successfully!</p>
            </div>
           <Link to="/CheckBugraise"> <button className="block mx-auto mt-4 bg-blue-900 text-white px-4 py-1 font-semibold rounded" onClick={() => setShowPopup(false)}>Close</button></Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BugRaiseForm;
