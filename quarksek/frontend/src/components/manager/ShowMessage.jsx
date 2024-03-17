import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import M_Layout from './M_Layout'

const ShowMessage = () => {
    return (
        <M_Layout>
            <div className="container mx-auto py-12">
                <h1 className="text-2xl ml-28 font-bold">Customer Request</h1>
                <div className='ml-56 mt-14'>
                    <div className="my-8 flex ">
                        <label className="block  font-bold text-lg text-gray-700">Client URL:</label>
                        <h3 className='ml-10 font-semibold'>www.google.com</h3>
                    </div>

                    <div className="my-4 flex">
                        <label className="block font-bold text-lg  text-gray-700">Credentials:</label>
                        <h3 className='ml-8 font-semibold'>sivaganesz   / 98787654</h3>
                    </div>
                    <Link to="/AssignTester">
                    <button class="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 shadow-lg	 rounded mt-6" >
                        AssignTester 
                    </button>
                    </Link>
                </div>
            </div>
       
        </M_Layout>
    );
}
export default ShowMessage