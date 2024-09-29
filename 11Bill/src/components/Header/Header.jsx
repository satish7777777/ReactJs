import React from "react";
import { useState, useEffect } from "react";
import { postCustomerDetail, getAllCustomer } from "../../services/ApiCall";

function Header({handleChange,formData}) {
  
  return (
    <div>
      <h1>Header</h1>
      <div>
        <div>
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Invoice Form
          </h1>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              

              <div>
                <label className="block text-gray-700">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700">Bill No:</label>
                <input
                  type="text"
                  name="billNo"
                  value={formData.billNo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Customer Name:</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address:</label>
              <textarea
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
