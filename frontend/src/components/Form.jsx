import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import api from '../api'; 
function Form({ route, method }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const ACCESS_TOKEN = 'access_token';
    const REFRESH_TOKEN = 'refresh_token';

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
    
        try {
            // console.log("Submitting form data:", { username: userName, password });
    
            // Corrected data payload to match server expectations
            const res = await api.post(route, { username: userName, password });
    
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error Response:", error.response);
    
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data.message || 'Bad request'}`);
            } else {
                alert('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    const name = method === "login" ? "Sign In" : "Sign Up";
    const deverseName = method === "login" ? "Sign Up" : "Sign In";
    const topSentence= method ==="login" ? "Sing in with your account" : "Sing up with new account";
    const forward = method === "login" ? "/register" : "/login";

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gray-900 p-8 text-white">
                {/* Logo/Icon */}
                <div className="mb-6">
                    {/* Replace with your logo or icon */}
                    <a href="/login" className="flex justify-center">
                        <img src="./src/images/codewave1.png" alt="Logo" className="w-16 h-16 rounded-full" />
                        codewave
                    </a>
                </div>

                {/* Heading */}
                <h2 className="text-xl lg:text-2xl font-bold mb-2">{topSentence}</h2>
                <p className="text-gray-400 mb-6">Start your journey with us</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm mb-6">
                    <div className="mb-4">
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="User Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                        disabled={loading} // Disable button when loading
                    >
                        {name}
                    </button>
                </form>

                {/* Alternative Sign-Up Options */}
                <div className="w-full max-w-sm flex flex-col space-y-2 mb-6">
                    {[
                        { href: 'https://gmail.com', icon: faGoogle, color: 'text-red-700', name: 'Gmail' },
                        { href: 'https://facebook.com', icon: faFacebook, color: 'text-blue-700', name: 'Facebook' },
                        { href: 'https://twitter.com', icon: faTwitter, color: 'text-black', name: 'Twitter' },
                    ].map((option, index) => (
                        <a key={index} href={option.href} className={`flex items-center justify-center w-full bg-gray-600 ${option.color} py-2 px-4 rounded hover:bg-blue-500 transition-colors`}>
                            <FontAwesomeIcon icon={option.icon} className="mr-2" />
                            <p className="text-white">{name} with {option.name}</p>
                        </a>
                    ))}
                </div>

                {/* Sign-In Link */}
                <p className="text-gray-400">
                    Don't have an account? <a href={forward} className="text-indigo-500 hover:underline">{deverseName}</a>
                </p>
            </div>

            {/* Right Side - Background Image */}
            <div
                className="w-full lg:w-1/2 h-64 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url('./src/images/laptop3.jpg')` }}
            ></div>
        </div>
    );
}

export default Form;
