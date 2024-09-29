import React, { useState, useEffect } from 'react';
import { getAllData, getRoomTypeById, postRoomTypeData, updateRoomTypeById } from './TaskServices/Api';

function RoomsForm({ id, handleSuccess, handleClose }) {
  const [inputData, setInputData] = useState({
    id: "",
    roomno: "",
    rate: "",
    noofbeds: "",
  });

  useEffect(() => {
    if (id) {
      getRoomType();
    }
  }, [id]);

  const getRoomType = async () => {
    const result = await getRoomTypeById(id);
    setInputData(result);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  //   const nextId = inputData.length > 0 ? Math.max(...inputData.map(inputData => parseInt(inputData.id))) + 1 : 1;
  // const newItem = { id: nextId, roomno: "", rate: "", noofbeds: "" };
  // setInputData([...inputData, newItem]);

    let result;
    if (id) {
      result = await updateRoomTypeById(id, inputData);
    } else {
      result = await postRoomTypeData(inputData);
    }
    handleSuccess(result);
    handleClose();
  };

  console.log("inputData", inputData)

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="roomno" className="block text-sm font-medium text-gray-700">Room No:</label>
            <input
              type="text"
              name="roomno"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setInputData({ ...inputData, roomno: e.target.value })}
              value={inputData.roomno}
            />
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate:</label>
            <input
              type="text"
              name="rate"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setInputData({ ...inputData, rate: e.target.value })}
              value={inputData.rate}
            />
          </div>

          <div>
            <label htmlFor="noofbeds" className="block text-sm font-medium text-gray-700">No of Beds:</label>
            <input
              type="text"
              name="noofbeds"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setInputData({ ...inputData, noofbeds: e.target.value })}
              value={inputData.noofbeds}
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
  );
}

export default RoomsForm;
