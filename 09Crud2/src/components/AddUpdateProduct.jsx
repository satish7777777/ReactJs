import React, { useEffect } from "react";
import "./AddProduct.css";
import { useState } from "react";
import { getAllData, getUserById, postUserData, updateUserById } from "../ProductService/Api";

const AddUpdateProduct = ({ id, handleSuccess, handleClose }) => {
  const [inputData, setInputData] = useState({
    // id: "",
    name: "",
    quantity: "",
    rate: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    getAllData();
    console.log("id---", id);
    if (id) getUser();
    
  }, []);

  const getUser = async () => {
    const result = await getUserById(id);
    console.log(result);
    setInputData(result);
  };

    const validate = () => {
    const newErrors = {};

    if (!inputData.name) {
      newErrors.name = "Name is required";
    }

    if (!inputData.quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(inputData.quantity) || inputData.quantity <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
    }

    if (!inputData.rate) {
      newErrors.rate = "Rate is required";
    } else if (isNaN(inputData.rate) || inputData.rate <= 0) {
      newErrors.rate = "Rate must be a positive number";
    }

    if (!inputData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
      newErrors.email = "Email address is invalid";
    }

    return newErrors;
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let result;
      if (id) {
        result = await updateUserById(id, inputData);
      } else {
        result = await postUserData(inputData);
      }
      console.log("submitted result--", result);
      // handleSuccess or handleClose can be called here if needed
       handleSuccess(result);
       handleClose();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* <div className="form"> */}
        <form onSubmit={handleSubmit} style={{width:550}}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              value={inputData.name}
              style={{height:50}}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, quantity: e.target.value })
              }
              value={inputData.quantity}
              style={{height:50}}
            />
             {errors.quantity && <span className="error">{errors.quantity}</span>}
          </div>
          <div>
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              name="rate"
              placeholder="Rate"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, rate: e.target.value })
              }
              value={inputData.rate}
              style={{height:50}}
            />
            {errors.rate && <span className="error">{errors.rate}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
              value={inputData.email}
              style={{height:50}}
            />
             {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <div>
              <button className="btn btn-info" >
                Save
              </button>
              <button className="btn btn-info" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default AddUpdateProduct;


