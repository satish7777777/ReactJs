import React from 'react'
import AddProduct from './AddProduct';
import { useState } from 'react';

function Home() {
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [items, setItems] = useState([]);
  
  const togglePopup = () => {
    setIsAddProduct(!isAddProduct);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  return (
    <div className="App">
     <h1 style={{textAlign:'center'}}>Product Detail Page</h1>
      <table className="item-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Action<button onClick={togglePopup}>+</button><button>U</button></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.rate}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                {isAddProduct && <AddProduct handleClose={togglePopup} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
