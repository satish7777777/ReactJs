import React, { useState, useEffect } from "react";
// import Input from './Input';
import { postAllItem } from "../../services/Item";
import { addCart } from "../feature/feature";
import { useDispatch, useSelector } from "react-redux";

function Body({ handleChangeForItem }) {
  const [data, setData] = useState([]);
  const [ftotal, setftotal] = useState(0);
  // let dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: "",
    rate: "",
    quantity: "",
    amount: "",
  });

  const [inputArr, setInputArr] = useState([]);

  const amount = () => {
    //function to calculate price after all TAX(FINAL PRICE)
    let finalPrice = 0;
    inputArr.forEach((item) => {
      finalPrice = item.rate * item.quantity; // Assuming each item has a 'price' and 'quantity' property
    });
    setftotal(finalPrice);
  };

  function changeHandle(e) {
    const { name, value } = e.target;

    // If you are directly modifying 'rate' or 'quantity',
    // we need to handle them separately to update 'amount'
    setInputData((prevInputData) => {
      const newInputData = {
        ...prevInputData,
        [name]: value,
      };

      // Calculate the new amount only if both rate and quantity are present
      if (newInputData.rate && newInputData.quantity) {
        newInputData.amount = newInputData.rate * newInputData.quantity;
      }

      return newInputData;
    });

    console.log("changeHandle", value);
  }

  useEffect(() => {
    console.log("inputDataitemsdata---", inputData);
  }, [inputData]);

  function storeData() {
    //Store input data from
    let { name, rate, quantity, amount } = inputData;
    // setInputArr([...inputArr,{name,ID,Address,Srole}])
    let alldata = JSON.parse(JSON.stringify(inputData));
    let alldatainputArr = JSON.parse(JSON.stringify(inputArr));
    alldatainputArr.push(alldata);
    setInputArr([...inputArr, inputData]);
    // setFormData([...inputArr, inputData]);

    setInputData({ name: "", rate: "", quantity: "", amount: "" });
  }
  useEffect(() => {
    //console.log("inputData",inputData);
    console.log("setInputArr", inputArr);
    handleChangeForItem(inputArr);

    amount();
  }, [inputData]);
  function sendDa() {
    // sendData();
    storeData();
    renderData();
  }

  useEffect(() => {
    console.log("dat", data);
    renderData();
    // amount()
  }, [data]);

  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();
    console.log("Form data submitted:", data);
    console.log("---handleAddNewClick---", data);
    const dyid =
      data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
    console.log("nextId---", dyid);

    // const dyid =
    //   customerData.length > 0
    //     ? Math.max(...customerData.map((item) => item.id)) + 1
    //     : 1;
    // console.log("nextId---", dyid);
    let result;
    result = await postAllItem(data);
    console.log("submitted result--", result);
  };

  const renderData = () => {
    return (
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inputArr.map((element, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {element.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {element.rate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {element.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {element.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Item Details</h1>
      {/* <Input setFormData={setData} /> */}
      <div className=" flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Items</h1>
          <div className="flex space-x-4 items-end">
            <div className="flex flex-col">
              <label className="text-gray-700">Item Name:</label>
              <input
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                autoComplete="off"
                type="text"
                name="name"
                value={inputData.name}
                onChange={changeHandle}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Rate:</label>
              <input
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                autoComplete="off"
                type="number"
                name="rate"
                value={inputData.rate}
                onChange={changeHandle}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Quantity:</label>
              <input
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                autoComplete="off"
                type="number"
                name="quantity"
                value={inputData.quantity}
                onChange={changeHandle}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Amount:</label>
              <input
                className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                autoComplete="off"
                type="number"
                name="amount"
                value={ftotal}
                onChange={changeHandle}
              />
            </div>
            <div>
              <button
                onClick={sendDa}
                className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-yellow-200 p-8">
        <div className="overflow-x-auto">{renderData()}</div>
        <button
          onClick={handleSubmit}
          className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Body;
