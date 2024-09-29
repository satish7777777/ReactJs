import React, { useEffect } from 'react'
import BookRoom from './BookRoom';
import { useState } from 'react';
import { getAllRoomBookData, deleteRoomBookById } from '../../../HotelService/BookRoom';
import RTypeForm from './RTypeForm';
import { getAllData } from '../../../HotelService/Api';

function Room() {
  const [editingId, setEditingID]=useState(null);
  const [openPopup, setOpenPopup]=useState(false);
  const [columns, setColumns] = useState([]);
  const [items, setItems] = useState([])
  // const [openPopupType, setOpenPopupType] = useState(false);

  useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = async () => {
    try {
      const newData = await getAllRoomBookData();
      console.log("RoomBooked", newData[0]);
      setColumns(Object.keys(newData[0]));
      setItems(newData);
    } catch (ex) {
      console.log(ex);
    }
  };


  const ShowPopup=(show)=>{
    setOpenPopup(show);
}
const onSuccess=()=>{
    ShowPopup(false);
    getAllRoomBookData();
    
}
// const showPopupType = (show)=>{
//   setOpenPopupType(show);
// }
// const onSuccessType = () =>{
//   showPopupType(false);
//   getAllData();
// }
  const handleAddNewClick=()=>{
   
    setEditingID(null);
    ShowPopup(true);
     
  }
  
const handleEditClick=(id)=>{
  setEditingID(id);
  ShowPopup(true);
  
}
const handleRemoveItem =async (id) => {
  console.log("remove user--",id)
  const result = await deleteRoomBookById(id);
  fetchData();
  console.log("result--",result)
};

  return (
    <div>

          <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Rooms</h1>
        <button
          className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300"
          onClick={handleAddNewClick}
        >
          Create Rooms
        </button>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              {columns.map((c, i) => (
                <th key={i} className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">{c}</th>
              ))}
              <th className="p-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.roomtype}</td>
                <td className="p-4">{item.roomno}</td>
                <td className="p-4">{item.rate}</td>
                <td className="p-4">{item.noofbeds}</td>
                <td className="p-4">{item.active}</td>
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
      {openPopup && <BookRoom id={editingId} handleSuccess={onSuccess} handleClose={()=>{ShowPopup(false)}} />}
        {/* {openPopupType && <RTypeForm handleSuccess2={onSuccessType} handleClose2={()=>{showPopupType(false)}}/>} */}
    </div>
  
  )
}

export default Room
