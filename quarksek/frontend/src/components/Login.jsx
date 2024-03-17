import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="login p-8 bg-gray-100 border border-gray-300 rounded shadow-lg">
                <h1 className="text-center text-2xl mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="block w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="block w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    
                    <Link to="/customer" ><button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Login
                    </button></Link>
                </form>
                <div className="mt-8 text-center">
                    <p>OR</p>
                    <Link to="/signup" className="text-blue-500 hover:underline">Signup Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
