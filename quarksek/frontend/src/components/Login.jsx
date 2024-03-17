import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import loginimg from '../../../frontend/src/assets/login.png';
import loginimg1 from '../../../frontend/src/assets/login1.png';
import { BsFillBugFill } from "react-icons/bs";

const Login = () => {
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if(userId && password){
      if (role === "customer") {
        // Redirect to customer page
        navigate("/customer");
      } else if (role === "manager") {
        // Redirect to manager page
        navigate("/manager");
      } else if (role === "tester") {
        // Redirect to tester page
        navigate("/tester");
      } else {
        setError("Invalid role selected.");
      }
    } else {
      setError("Invalid Input Value");
    }
  };

  return (
    <>
     
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center relative" style={{backgroundImage: `url(${loginimg})`}}>
      <h3 className="absolute top-0 left-20 text-4xl font-bold mr-8 text-white mt-8 flex">BUG TRACKING<BsFillBugFill className="ml-2 bg-red-500 p-1 rounded-2xl size-12"/>
</h3>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-80 mb-4 relative">
          <img src={loginimg1} alt="Additional Image" className="absolute left-0 bottom-0 ml-80 mt-8 w-80 h-96 object-cover" />
          <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
          {error && (
            <div className="text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              User ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div className="mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="customer">Customer</option>
              <option value="manager">Manager</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className="flex ml-20 mt-7">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
