import React from 'react';
import '../../style/style.css';
import { Link } from 'react-router-dom';
import Layout from './Layout';
const CustomerHome = () => {
  return (
    <Layout>
      <div className="container  mx-auto py-4">
        <div className="lg:ml-10 mt-5 sm:mr-10">
          <h1 className="text-2xl font-bold">Customer Dashboard</h1>
               <Link to="/TestRequest" className="text-white block py-2">
               <button class="bg-blue-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-6">
                + Test Request
                </button></Link>
            <div className="flex justify-center items-center h-80 mt-10">
                <img src="https://rb.gy/rkowq2" className="h-80 w-90 object-cover" alt="" />
          </div>
        </div>
      </div>
    </Layout>

  );
};



export default CustomerHome;
// Similarly, create About.js and Contact.js components
