import React, { useEffect, useState } from "react";
import { getAllData, deleteRoomTypeById } from "../../../HotelService/Api";
import RTypeForm from "./RTypeForm";

function RoomTypes() {
  const [columns, setColumns] = useState([]);
  const [items, setItems] = useState([]);
  const [editingId, setEditingID] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("getall", getAllData);
  }, []);

  const fetchData = async () => {
    try {
      const newData = await getAllData();
      console.log("data", newData[0]);
      setColumns(Object.keys(newData[0]));
      setItems(newData);
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleRemoveItem = async (id) => {
    try {
      console.log("remove user--", id);
      const result = await deleteRoomTypeById(id);
      fetchData();
      console.log("result--", result);
    } catch (ex) {
      alert(ex.message);
    }
  };

  const onSuccess = () => {
    ShowPopup(false);
    getAllData();
  };
  const ShowPopup = (show) => {
    setOpenPopup(show);
  };
  const handleEditClick=(id)=>{
    setEditingID(id);
    ShowPopup(true);
    
  }

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
        className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
        onClick={handleAddNewClick}
      >
        Create Room Type
      </button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
              <th className="p-4">Room Type</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                <td className="p-4">{item.name}</td>
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
        <RTypeForm
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

export default RoomTypes;
