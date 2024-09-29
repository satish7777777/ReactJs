import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Hotel Management</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
          <li>
              <Link
                to="/room"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
              >
                Room
              </Link>
          
            </li>
            <li>
              <Link
                to="/roomservices"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
              >
                Room Services
              </Link>
              
            </li>
            <li>
              <Link
                to="/report"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
              >
                Report
              </Link>
            
            </li>
           
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;