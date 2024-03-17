import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic for customer here
        console.log('Customer login with username:', username, 'and password:', password);
    };

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="w-60 border border-blue-300 rounded-md p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Customer Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-4 py-2 border rounded-md mb-2 w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 border rounded-md mb-4 w-full"
                />
                <Link to="/customer">
                    <button onClick={handleLogin()} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FrontPage;
