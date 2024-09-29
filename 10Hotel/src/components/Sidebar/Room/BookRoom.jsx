import React from "react";
import "./BookRoom.css";
import { useState, useEffect } from "react";
import { getAllData } from "../../../HotelService/Api";
import { postRoomBookData,updateRoomBookById, getRoomBookById, getAllRoomBookData } from "../../../HotelService/BookRoom";
import RTypeForm from "./RTypeForm";

function BookRoom({ id, handleSuccess, handleClose }) {
  const [columns, setColumns] = useState([]);
  const [items, setItems] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    roomtype: "",
    roomno: "",
    rate: "",
    noofbeds: "",
    active: "",
  });
 const  [roomData ,setRoomData] = useState([])
 const [errors, setErrors] = useState({});
 const [openPopupType, setOpenPopupType] = useState(false);

  useEffect(() => {
    fetchData();
    if(id) getRoom()
  }, []);

  const getRoom = async () => {
    const result = await getRoomBookById(id);
    console.log(result);
    setInputData(result);
  };

  const showPopupType = (show)=>{
    setOpenPopupType(show);
  }
  const onSuccessType = () =>{
    showPopupType(false);
    getAllData();
  }

  const handleAddRoomType = () =>{
    showPopupType(true);
  }

  const validate = () => {
    const newErrors = {};

    if (!inputData.name) {
      newErrors.name = "Name is required";
    }

    if (!inputData.roomno) {
      newErrors.roomno = "RoomNo is required";
    } else if (isNaN(inputData.roomno) || inputData.roomno <= 0) {
      newErrors.roomno = "RoomNo must be a positive number";
    }

    if (!inputData.rate) {
      newErrors.rate = "Rate is required";
    } else if (isNaN(inputData.rate) || inputData.rate <= 0) {
      newErrors.rate = "Rate must be a positive number";
    }

    // if (!inputData.email) {
    //   newErrors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(inputData.email)) {
    //   newErrors.email = "Email address is invalid";
    // }

    return newErrors;
  };
  

  const fetchData = async () => {
    try {
      const newData = await getAllData();
      console.log("--------------", newData);
    const roomData =  await getAllRoomBookData()    
      setColumns(Object.keys(newData[0]));
      setItems(newData);
      setRoomData(roomData);

    } catch (ex) {
      console.log(ex);
    }
  };

  const changeHandleRoomType = (e)=>{
    console.log(e.target.value)
    setInputData({...inputData, roomtype: e.target.value})
  }
  const handleSubmit = async (event) => {
    console.log("submitted")
    event.preventDefault();
    const validationErrors = validate();   
    setErrors(validationErrors);

    // if( (Object.keys(validationErrors).length === 0)){
        console.log("---handleAddNewClick---",roomData)
        const dyid = roomData.length > 0 ? Math.max(...roomData.map(item => item.id)) + 1 : 1;
        console.log("nextId---",dyid)
        // setDynamicRoomId(dyid)
      
      let result;
      if (id) {
        result = await updateRoomBookById(id, inputData);
      } else {
        inputData.id = dyid
        result = await postRoomBookData(inputData);
      }
      console.log("submitted result--", result);
      // handleSuccess or handleClose can be called here if needed
       handleSuccess(result);
       handleClose();
    //  }
  };

  

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
    <button onClick={handleAddRoomType}>Add RoomType</button>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Room Type:</label>
        <select
         onChange={changeHandleRoomType} className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {items &&
            items.map((itm) => (
              <option
                key={itm.name}
                value={inputData.name}
                // onChange={(e) =>
                //   console.log(e.target.value)
                // }
              >
                {itm.name}
              
              </option>
            ))}
        </select>
        
      </div>
      <div>
        <label htmlFor="roomno" className="block text-sm font-medium text-gray-700">Room no:</label>
        <input
          type="text"
          name="roomno"
          placeholder="Room no"
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setInputData({ ...inputData, roomno: e.target.value })
          }
          value={inputData.roomno}
        />
        {errors.roomno && <span className="text-sm text-red-500">{errors.roomno}</span>}
      </div>
      <div>
        <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate:</label>
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setInputData({ ...inputData, rate: e.target.value })
          }
          value={inputData.rate}
        />
        {errors.rate && <span className="text-sm text-red-500">{errors.rate}</span>}
      </div>
      <div>
        <label htmlFor="noofbeds" className="block text-sm font-medium text-gray-700">No of Beds:</label>
        <input
          type="number"
          name="noofbeds"
          placeholder="No of Beds"
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setInputData({ ...inputData, noofbeds: e.target.value })
          }
          value={inputData.noofbeds}
        />
        {errors.noofbeds && <span className="text-sm text-red-500">{errors.noofbeds}</span>}
      </div>
      <div>
        <label htmlFor="active" className="block text-sm font-medium text-gray-700">Active Status:</label>
        <input
          type="text"
          name="active"
          placeholder="ON/OFF"
          className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) =>
            setInputData({ ...inputData, active: e.target.value })
          }
          value={inputData.active}
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
    {openPopupType && <RTypeForm handleSuccess={onSuccessType} handleClose2={()=>{showPopupType(false)}}/>}
  </div>
</div>

  );
}

export default BookRoom;
