import React from "react";
import { useState } from "react";

function BookForm({ id, handleClose, handleSuccess }) {
  const [inputData, setInputData] = useState({
    name: "",
    deisese: "",
    DocterName: "",
    Address: "",
  });

  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();

    // console.log("---handleAddNewClick---",roomData)
    // const dyid = roomData.length > 0 ? Math.max(...roomData.map(item => item.id)) + 1 : 1;
    // console.log("nextId---",dyid)

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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name:
            </label>
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
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Deisese Name:
            </label>
            <input
              type="text"
              name="deisese"
              placeholder="Should be AC, Non-Ac-, Delux, Dimond Delux"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              value={inputData.deisese}
            />
          </div>
          <div>
            
            <select
              name="DocterName"
              
              value={inputData.DocterName}
            >
              <option value={"Docter A"}>Docter A</option>
              <option value={"DevDocter B"}>Docter B</option>
              <option value={"Docter C"}>Docter C</option>
              <option value={"Docter D"}>Docter D</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Address:
            </label>
            <input
              type="text"
              name="Address"
              placeholder="Should be AC, Non-Ac-, Delux, Dimond Delux"
              className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
              value={inputData.Address}
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

export default BookForm;
