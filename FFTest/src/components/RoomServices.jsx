// import React, { useState, useEffect } from 'react';
// import { getAllData, getAllServices, postRoomServiceData } from './TaskServices/Api';

// function RoomService() {
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [services, setServices] = useState([]);
//   const [selectedRoom, setSelectedRoom] = useState('');
//   const [selectedService, setSelectedService] = useState('');
//   const [serviceRate, setServiceRate] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [date, setDate] = useState('');

//   useEffect(() => {
//     fetchRoomTypes();
    
//     fetchServices();
//   }, []);

//   const fetchRoomTypes = async () => {
//     try {
//       const rooms = await getAllData();
//       setRoomTypes(rooms);
//       console.log("rooms",roomTypes);
//     } catch (error) {
//       console.error('Error fetching room types:', error);
//     }
//   };

//   const fetchServices = async () => {
//     try {
//       const services = await getAllServices();
//       setServices(services);
//       console.log("Services",services);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     }
//   };

//   const handleServiceChange = (event) => {
//     const selectedService = services.find(service => service.id === event.target.value);
//     setSelectedService(selectedService.service);
//     setServiceRate(selectedService.rate);
//   };

//   const handleSave = async () => {
//     const roomServiceData = {
//       roomno: selectedRoom,
//       service: selectedService,
//       date,
//       rate: serviceRate,
//       quantity,
//       totalRate: serviceRate * quantity
//     };

//     try {
//       await postRoomServiceData(roomServiceData);
//       alert('Room service data saved successfully');
//       // Reset form fields after saving
//       setSelectedRoom('');
//       setSelectedService('');
//       setServiceRate(0);
//       setQuantity(1);
//       setDate('');
//     } catch (error) {
//       console.error('Error saving room service data:', error);
//     }
//   };

//   const totalRate = serviceRate * quantity;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         Room Service
//       </h1>
//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Room No:</label>
//           <select
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={selectedRoom}
//             onChange={(e) => setSelectedRoom(e.target.value)}
//           >
//             <option value="">Select Room</option>
//             {roomTypes.map(room => (
//               <option key={room.id} value={room.roomno}>
//                 {room.roomno}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Service:</label>
//           <select
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={selectedService}
//             onChange={handleServiceChange}
//           >
//             <option value="">Select Service</option>
//             {services.map(service => (
//               <option key={service.id} value={service.id}>
//                 {service.service}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Date:</label>
//           <input
//             type="date"
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Rate:</label>
//           <input
//             type="number"
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={serviceRate}
//             readOnly
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Quantity:</label>
//           <input
//             type="number"
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Total Rate:</label>
//           <input
//             type="number"
//             className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             value={totalRate}
//             readOnly
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition duration-300"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoomService;


import React, { useState, useEffect } from 'react';
import { generateId } from './utils';
import { getAllData, getAllServices, postRoomServiceData } from './TaskServices/Api';

function RoomService() {
  const [roomTypes, setRoomTypes] = useState([]);
  const [services, setServices] = useState([]);
  const [roomNo, setRoomNo] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [rate, setRate] = useState(0);
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalRate, setTotalRate] = useState(0);

  useEffect(() => {
    fetchRoomTypes();
    fetchServices();
  }, []);

  useEffect(() => {
    setTotalRate(rate * quantity);
  }, [rate, quantity]);

  const fetchRoomTypes = async () => {
    try {
      const rooms = await getAllData();
      setRoomTypes(rooms);
    } catch (error) {
      console.error('Error fetching room types:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const servicesData = await getAllServices();
      setServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleServiceChange = (event) => {
    const selectedServiceId = event.target.value;
    const selectedService = services.find(service => service.id === selectedServiceId);
    setSelectedService(selectedServiceId);
    setRate(selectedService.rate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRoomService = {
      id: generateId(),
      roomNo,
      serviceId: selectedService,
      date,
      rate,
      quantity,
      totalRate
    };

    try {
      await postRoomServiceData(newRoomService);
      alert('Room service data saved successfully');
      // Clear the form
      setRoomNo('');
      setSelectedService('');
      setRate(0);
      setDate('');
      setQuantity(1);
      setTotalRate(0);
    } catch (error) {
      console.error('Error saving room service data:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Room Service
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="roomNo" className="block text-sm font-medium text-gray-700">Room Number:</label>
          <select
            id="roomNo"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
          >
            <option value="">Select Room</option>
            {roomTypes.map(room => (
              <option key={room.id} value={room.roomno}>
                {room.roomno}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service:</label>
          <select
            id="service"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">Select Service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate:</label>
          <input
            type="number"
            id="rate"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={rate}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            id="quantity"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="totalRate" className="block text-sm font-medium text-gray-700">Total Rate:</label>
          <input
            type="number"
            id="totalRate"
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={totalRate}
            readOnly
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoomService;
