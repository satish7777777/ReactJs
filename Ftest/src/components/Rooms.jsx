
import React from 'react';
import RoomsForm from './RoomsForm';
import { useState, useEffect } from 'react';
import { getAllData, deleteRoomTypeById } from './TaskServices/Api';

function Rooms() {
  const [items, setItems] = useState([]);
  const [editingId, setEditingID] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("items",items)
  }, []);

  const fetchData = async () => {
    try {
      const newData = await getAllData();
      setItems(newData);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await deleteRoomTypeById(id);
      fetchData();
    } catch (ex) {
      alert(ex.message);
    }
  };

  const onSuccess = () => {
    ShowPopup(false);
    fetchData();
  };

  const ShowPopup = (show) => {
    setOpenPopup(show);
  };

  const handleEditClick = (id) => {
    setEditingID(id);
    ShowPopup(true);
  };

  const handleAddNewClick = () => {
    setEditingID(null);
    ShowPopup(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Room Types
      </h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition duration-300"
        onClick={handleAddNewClick}
      >
        Create Room
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
              <th className="p-4">Room No</th>
              <th className="p-4">Rate</th>
              <th className="p-4">No of Beds</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                <td className="p-4">{item.roomno}</td>
                <td className="p-4">{item.rate}</td>
                <td className="p-4">{item.noofbeds}</td>
                <td className="p-4 space-x-2">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => handleEditClick(item.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openPopup && (
        <RoomsForm
          id={editingId}
          handleSuccess={onSuccess}
          handleClose={() => {
            ShowPopup(false);
          }}
        />
      )}
    </div>
  );
}

export default Rooms;
