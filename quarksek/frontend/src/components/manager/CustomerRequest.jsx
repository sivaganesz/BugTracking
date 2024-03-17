// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import M_Layout from './M_Layout';
// import StatusModal from './StatusModal';

// const CustomerRequest = () => {
//   const [customerMessages, setCustomerMessages] = useState([
//     "1) Customer message ",
//     "2) Customer message ",
//     "3) Customer message ",
//   ]);
//   const [inProgressMessages, setInProgressMessages] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const addCustomerMessage = (message) => {
//     setCustomerMessages(prevMessages => prevMessages.filter(msg => msg !== message));
//     setInProgressMessages(prevMessages => [...prevMessages, message]);
//     // Trigger notification here
//   };

//   const handleStatusClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <M_Layout>
//       <div className="container mx-auto py-4">
//         <div className="ml-8">
//           <h1 className="text-2xl font-bold">Customer Request</h1>
//           <div className="mt-4">
//             {customerMessages.map((message, index) => (
//               <p key={index} className="text-lg">
//                 {message}
//                 <button
//                   className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-1.5 rounded ml-5 mt-4"
//                   onClick={() => addCustomerMessage(message)}>
//                   Accept
//                 </button>
//                 <button className="bg-gray-700 hover:bg-green-600 text-white px-6 rounded ml-4 mt-4">
//                   <Link to="/Request_Status" className="text-white block py-2">View</Link>
//                 </button>
//               </p>
//             ))}
//           </div>
//         </div>

//         <br /><br />

//         <div className="ml-8">
//           <h1 className="text-2xl font-bold">In Progress</h1>
//           <div className="mt-4">
//             {inProgressMessages.map((message, index) => (
//               <p key={index} className="text-lg">
//                 {message}
//                 <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-1.5 rounded ml-2 mt-4"
//                   onClick={handleStatusClick} >
//                   Status
//                 </button>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>

//       {showModal && <StatusModal onClose={handleCloseModal} />}
//     </M_Layout>
//   );
// };

// export default CustomerRequest;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import M_Layout from './M_Layout';
// import { StatusModal } from './StatusModal';

// const CustomerRequest = () => {
//   const [customerMessages, setCustomerMessages] = useState([
//     "1) Customer message ",
//     "2) Customer message ",
//     "3) Customer message ",
//   ]);
//   const [inProgressMessages, setInProgressMessages] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const addCustomerMessage = (message) => {
//     setCustomerMessages(prevMessages => prevMessages.filter(msg => msg !== message));
//     setInProgressMessages(prevMessages => [...prevMessages, message]);
//     // Trigger notification here
//   };

//   const handleStatusClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <M_Layout>
//       <div className="container mx-auto py-4">
//         <div className="ml-8">
//           <h1 className="text-2xl font-bold">Customer Request</h1>
//           <div className="mt-4">
//             {customerMessages.map((message, index) => (
//               <p key={index} className="text-lg">
//                 {message}
//                 <button
//                   className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-1.5 rounded ml-5 mt-4"
//                   onClick={() => addCustomerMessage(message)}>
//                   Accept
//                 </button>
//                 <button className="bg-gray-700 hover:bg-green-600 text-white px-6 rounded ml-4 mt-4">
//                   <Link to="/Request_Status" className="text-white block py-2">View</Link>
//                 </button>
//               </p>
//             ))}
//           </div>
//         </div>

//         <br /><br />

//         <div className="ml-8">
//           <h1 className="text-2xl font-bold">In Progress</h1>
//           <div className="mt-4">
//             {inProgressMessages.map((message, index) => (
//               <p key={index} className="text-lg">
//                 {message}
//                 <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-1.5 rounded ml-2 mt-4"
//                   onClick={handleStatusClick} >
//                   Status
//                 </button>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>

//       {showModal && <StatusModal onClose={handleCloseModal} />}
//     </M_Layout>
//   );
// };

// export default CustomerRequest;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import M_Layout from './M_Layout';
import { BiSolidNotification } from "react-icons/bi";
import crimg from '../../assets/clientrequest.jpg'
import managerImage from '../../assets/manager1.png'


const CustomerRequest = () => {

  return (
    <M_Layout>
      <div className="container mx-auto fixed py-4">
        <div className="ml-4 ">
          <h1 className='text-2xl font-bold ml-10  underline underline-offset-4'>Under Review</h1>
          <Link to="/ShowMessage"><br/>
            <div className="bg-gray-300 w-60 fixed md text-white rounded py-2 ml-10 mt-4 flex">
              <div className='ml-3 '>
                <h1 className='text-blue-800 flex font-semibold mr-ml-3 mx-auto sm:mr-0'><BiSolidNotification color='black' size={20} className='mt-1' />sivaganesz@customer_01<br /></h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center h-80 mt-10">
                <img src={crimg} className="h-80 w-90 object-cover" alt="" />
          </div>

        <div className="ml-16 mb-10 underline underline-offset-8">
          <h1 className="text-2xl font-bold">In Progress</h1>
          {/* Add a button here */}
          <button className="bg-orange-600 hover:bg-green-600 text-white py-2 px-4 rounded mt-6">
            Testing In Progress
          </button>
        </div>
      </div>
    </M_Layout>
  );
};

export default CustomerRequest;
