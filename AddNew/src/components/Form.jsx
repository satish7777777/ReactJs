import React from 'react'
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
      const [formDataChild, setFormDataChild] = useState({
        name: '',
        email: ''
      });

    
      const [submitted, setSubmitted] = useState(false);
      const [submittedChild, setSubmittedChild] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        setFormDataChild({
            ...formDataChild,
            [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };

      const handleSubmit2 = (e) => {
        e.preventDefault();
        setSubmittedChild(true);
      };
  return (
    <div>
       <h1>React Form Submission Example</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Parent Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          {!submittedChild ? (
          <form onSubmit={handleSubmit2}>
          <div>
            <label>Name of Child:</label>
            <input
              type="text"
              name="name"
              value={formDataChild.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formDataChild.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
         </form>
          ) :(
            <div>
          <h2>Child Data</h2>
          <p>Name: {formDataChild.name}</p>
          <p>Email: {formDataChild.email}</p>
          </div>
          )}
          )
        
        </div>
   
      )}
  
    </div>


  )
}

export default Form
