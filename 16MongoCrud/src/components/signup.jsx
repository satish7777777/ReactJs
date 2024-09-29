import React, { useState, useEffect } from 'react';
import { createUser, getUserById, updateUser } from './Api/Api.js';
import { CommonComp } from './commoninput.jsx';

function Signup({ onClose, }) {
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

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
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md">
        
        <CommonComp handleInputChange={handleInputChange} buttonName={'Sign Up'} inputData={inputData} handleSubmit={handleSubmit}
          handleCloseSignUp={onClose}  />
        
      </div>
    </div>
  );
}

export default Signup;


