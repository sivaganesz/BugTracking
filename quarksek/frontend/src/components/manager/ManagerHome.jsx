import React, { Component } from 'react'
import Layout from './M_Layout'
import managerImage from '../../assets/manager1.png'

const ManagerHome = () => {
    return (
        <div>
            <Layout>
                <br></br>
                <h1 className='text-3xl font-bold ml-10 mt-0.5 underline underline-offset-8'>Project Manager Dashboard </h1>
                <div className="flex justify-center items-center h-80 mt-10">
                    <img src={managerImage} className="mt-16 h-90 w-90" alt="Manager Dashboard" />
                </div>
            </Layout>
        </div>
    )
}

export default ManagerHome