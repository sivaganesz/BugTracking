import React, { useState } from 'react';
import M_Layout from './M_Layout'

const ShowMessage = () => {
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const addNewMessage = (e) => {
      e.preventDefault();
    alert("welcome");
    };
  
    const handleUrlChange = (event) => {
      setUrl(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  return (
    <M_Layout>
        <div className="container mx-auto py-12">
          <h1 className="text-2xl ml-28 font-bold">CUSTOMER REQUEST</h1>
          <div className='text-center'>
            <form onSubmit={addNewMessage}>
              <div className="my-8 ">
                <label className="block  font-bold text-lg text-gray-700">Enter the URL:</label>
                <input
                  type="text"
                  value={url}
                  onChange={handleUrlChange}
                  className="mt-4 p-2  border border-gray-300 rounded-md w-80"
                  placeholder="Enter URL"
                />
              </div>
              <div className="my-4">
                <label className="block font-bold text-lg  text-gray-700">Credentials:</label>
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="mt-4 p-2 border border-gray-300 rounded-md w-80"
                  placeholder="Enter description"
                />
              </div>
              <button className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-lg rounded mt-6" type="submit">Request</button>
            </form>
          </div>
        </div>
    </M_Layout>
  );
}
export default ShowMessage