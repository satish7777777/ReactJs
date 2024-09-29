import React, { useState, useEffect } from 'react';
import { getAllData, getAllRoomServices } from './TaskServices/Api';

function Report() {
  const [roomTypes, setRoomTypes] = useState([]);
  const [roomServices, setRoomServices] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchRoomTypes();
    fetchRoomServices();
  }, []);

  const fetchRoomTypes = async () => {//fetch room data
    try {
      const rooms = await getAllData();
      setRoomTypes(rooms);
    } catch (error) {
      console.error('Error fetching room types:', error);
    }
  };

  const fetchRoomServices = async () => {//fetch roomservice data
    try {
      const services = await getAllRoomServices();
      setRoomServices(services);
    } catch (error) {
      console.error('Error fetching room services:', error);
    }
  };

  const handleRoomChange = (event) => {
    const selectedRoomNo = event.target.value;//taking input from select option of roomno
    setSelectedRoom(selectedRoomNo);
    const services = roomServices.filter(service => service.roomno === selectedRoomNo);//filter and match with input taken and roomno in db.json
    setFilterData(services);//set the data in the filterData
  };

  const calculateTotalAmount = () => {
    return filterData.reduce((total, service) => total + service.totalRate, 0);//calculate the total amount 
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Room Service Report
      </h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Room:</label>
          <select
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedRoom}
            onChange={handleRoomChange}
          >
            <option value="">Select Room</option>
            {roomTypes.map(room => (
              <option key={room.id} value={room.roomno}>
                {room.roomno}
              </option>
            ))}
          </select>
        </div>

        {filterData.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">Room Service Details</h2>
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden mt-4">
              <thead>
                <tr className="bg-gray-200 text-left text-sm uppercase text-gray-600">
                  <th className="p-4">Service</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Rate</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total Rate</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((service, index) => (
                  <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                    <td className="p-4">{service.service}</td>
                    <td className="p-4">{service.date}</td>
                    <td className="p-4">{service.rate}</td>
                    <td className="p-4">{service.quantity}</td>
                    <td className="p-4">{service.totalRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <span className="text-lg font-bold">Total Amount: Rs. {calculateTotalAmount()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Report;
