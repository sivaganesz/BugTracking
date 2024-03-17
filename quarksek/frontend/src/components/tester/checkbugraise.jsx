import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbTargetArrow } from "react-icons/tb";
import { PiChatsFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import Layout from './T_Layout';
const CheckBugraise = () => {

    const [showNotification, setShowNotification] = useState(false);
    const addNewMessage = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000); // Hide notification after 2 seconds
    };
    return (
        <Layout>
            <div className='mx-auto'>
                <h1 className='text-blue-900 font-bold text-3xl ml-8 mt-9 underline underline-offset-4'>SivaGanesz</h1>
                {showNotification && <p className="bg-gray-800 text-white w-60 px-4 py-2 ml-auto mr-10 rounded mt-4">Message Send!</p>}
                <div className='lg:ml-20 md:ml-10  mt-20'>
                    <div className=''>
                        <h1 className='mt-3 font-bold ml-6 lg:ml-24 md:ml-16 sm:ml-10 text-2xl flex'>Your Request <span className='mt-2 ml-3'> <TbTargetArrow /></span></h1>
                        <br />
                        <h1 className='border border-black bg-red-800 text-white w-60 ml-16 text-center px-2     py-4 '>Waiting for Response<br />Form Team</h1>
                    </div>
                    <div className='mt-28 flex'>
                        <h1 className=''>
                            <span className='mt-1.5 ml-3 text-xl'><PiChatsFill size={52} /></span>
                        </h1>
                        <input type="text" placeholder='' className='border border-2 rounded border-gray-500 ml-4 mt-10 w-1/3 py-1' />
                        <div className="mt-10 ">
                            <button className='border flex px-2 py-1 mt-0.5 ml-2 bg-blue-900 rounded text-white hover:scale-110 transition-transform duration-300 '
                                onClick={addNewMessage}>SEND <span className='mt-1.5 ml-1'><IoSend /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )

}

export default CheckBugraise