import React from 'react'
import "./RTypeForm.css"
import { useState, useEffect } from 'react';
import { postRoomTypeData, updateRoomTypeById, getRoomTypeById } from '../../../HotelService/Api';
import { getAllRoomBookData } from '../../../HotelService/BookRoom';

function RTypeForm({ id, handleSuccess, handleClose }) {
    const [inputData, setInputData] = useState({
        id: "",
        name: "",
        // roomno: "",
        // rate: "",
        // noofbeds: "",
        // active: "",
      });
      const  [roomData ,setRoomData] = useState([])
      const [items, setItems] = useState([])

      useEffect(() => {
        fetchData();
        if(id) getRoomType()
      }, []);

      
  const fetchData = async () => {
    try {
      const newData = await getAllData();
      console.log("--------------");
    const roomData =  await getAllRoomBookData()    
    //   setColumns(Object.keys(newData[0]));
      setItems(newData);
      setRoomData(roomData);

    } catch (ex) {
      console.log(ex);
    }
  };
    
      const getRoomType = async () => {
        const result = await getRoomTypeById(id);
        console.log(result);
        setInputData(result);
      };

   
    const handleSubmit = async (event) => {
        console.log("submitted")
        event.preventDefault();
        
            console.log("---handleAddNewClick---",roomData)
            const dyid = roomData.length > 0 ? Math.max(...roomData.map(item => item.id)) + 1 : 1;
            console.log("nextId---",dyid)
            // setDynamicRoomId(dyid)
          
          let result;
          if (id) {
            result = await updateRoomTypeById(id, inputData);
          } else {
            inputData.id = dyid
            result = await postRoomTypeData(inputData);
          }
          console.log("submitted result--", result);
          // handleSuccess or handleClose can be called here if needed
           handleSuccess(result);
          // handleSuccess2(result);
           handleClose();
        //  }
      };
    
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
    <form onSubmit={handleSubmit} className="space-y-6">
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Room Type:</label>
        <input
          type="text"
          name="name"
          placeholder="Should be AC, Non-Ac-, Delux, Dimond Delux"
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setInputData({ ...inputData, name: e.target.value })
          }
          value={inputData.name}
        />
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default RTypeForm
