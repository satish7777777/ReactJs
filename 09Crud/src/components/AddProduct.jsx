import React from "react";
import { useState } from "react";

const AddProduct = ({ handleClose }) =>{
  
  const [form, setForm] = useState({id: "", name: "", quantity: "", rate: ""});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddItem = () => {
    setItems([...items, form]);
    setForm({ id: "", name: "", quantity: "", rate: "" });
  };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <div className="form">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          value={form.rate}
          onChange={handleInputChange}
        />
        <button className="close-btn" onClick={ handleClose }>Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
