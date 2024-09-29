import React, { useState } from 'react';
import Signup from './signup';
import { CommonComp } from './commoninput';

function Login() {
  const [popUp, setPopup] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    setPopup(true);
  };

  const handleCloseSignUp = () => {
    setPopup(false);
  };

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
    console.log("INPUTSDATAAA",inputData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await createUser(inputData); // Create new user
      onClose(); // Close the signup modal
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md transition-opacity duration-300 ${
          popUp ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
        <form className="mt-6">
          <div>
            <label className="block text-sm text-gray-800">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-800">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-purple-700 bg-gray-200 border rounded-md focus:border-purple-400 focus:bg-white focus:outline-none"
              placeholder="Enter your password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don't have an account?{' '}
          
          <button onClick={handleSignUp} className="font-medium text-purple-600 hover:underline">
            Sign up
          </button>
        </p>
      </div>

      {popUp && <Signup onClose={handleCloseSignUp} /> }
          
          
    </div>
  );
}

export default Login;
