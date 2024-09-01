import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Login() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gray-900 p-8 text-white">
        {/* Logo/Icon */}
        <div className="mb-6">
          {/* Replace with your logo or icon */}
          <a href="https://your-logo-url.com" className="flex justify-center">
            <img src="./src/images/icon.png" alt="Logo" className="w-12 h-12" />
          </a>
        </div>

        {/* Heading */}
        <h2 className="text-xl lg:text-2xl font-bold mb-2">Sign up with new account</h2>
        <p className="text-gray-400 mb-6">Start your journey with us</p>

        {/* Form */}
        <form className="w-full max-w-sm mb-6">
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          >
            Sign In
          </button>
        </form>

        {/* Alternative Sign-Up Options */}
        <div className="w-full max-w-sm flex flex-col space-y-2 mb-6">
          <a href="https://gmail.com" className="flex items-center justify-center w-full bg-white text-red-700 py-2 px-4 rounded border border-gray-300 hover:bg-blue-500 transition-colors">
            <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Sign in with Gmail
          </a>
          <a href="https://facebook.com" className="flex items-center justify-center w-full bg-white text-blue-700 py-2 px-4 rounded hover:bg-blue-500 transition-colors">
            <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Sign in with Facebook
          </a>
          <a href="https://twitter.com" className="flex items-center justify-center w-full bg-white text-black py-2 px-4 rounded hover:bg-blue-500 transition-colors">
            <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Sign in with Twitter
          </a>
        </div>

        {/* Sign-In Link */}
        <p className="text-gray-400">
          Don't have an account? <a href="#" className="text-indigo-500 hover:underline">Sign up</a>
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

export default Login;
