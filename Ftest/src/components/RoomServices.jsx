import React, { useState, useEffect } from 'react';
import { getAllData, getAllServices, postRoomServiceData } from './TaskServices/Api';

function RoomService() {
  const [roomTypes, setRoomTypes] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [serviceRate, setServiceRate] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState('');

  useEffect(() => {
    fetchRoomTypes();
    
    fetchServices();
  }, []);

  const fetchRoomTypes = async () => {//get the data of Rooms for selection dropdown
    try {
      const rooms = await getAllData();
      setRoomTypes(rooms);
      console.log("rooms",roomTypes);
    } catch (error) {
      console.error('Error fetching room types:', error);
    }
  };

  const fetchServices = async () => {//get the data of Services for selection dropdown
    try {
      const services = await getAllServices();
      setServices(services);
      console.log("Services",services);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleServiceChange = (event) => {
    const selectedService = services.find(service => service.id === event.target.value);//find/filter service by the help of service Id
    setSelectedService(selectedService.service);
    setServiceRate(selectedService.rate);//set the rate of service
  };

  const handleSave = async () => {
    const roomServiceData = {//
      roomno: selectedRoom,
      service: selectedService,
      date,
      rate: serviceRate,
      quantity,
      totalRate: serviceRate * quantity
    };

    try {
      await postRoomServiceData(roomServiceData);//call postservice for data inserting
      alert('Room service data saved successfully');
      // Reset form fields after saving
      setSelectedRoom('');
      setSelectedService('');
      setServiceRate(0);
      setQuantity(1);
      setDate('');
    } catch (error) {
      console.error('Error saving room service data:', error);
    }
  };

  const totalRate = serviceRate * quantity; //calculate rate after inserting data

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Room Service
      </h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Room No:</label>
          <select
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            <option value="">Select Room</option>{/*  */}
            {roomTypes.map(room => (
              <option key={room.id} value={room.roomno}>
                {room.roomno}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Service:</label>
          <select
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">Select Service</option> {/* */}
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <input
            type="date"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rate:</label>
          <input
            type="number"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={serviceRate}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Rate:</label>
          <input
            type="number"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={totalRate}
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomService;
