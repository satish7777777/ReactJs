

// // src/components/Calendar.js
// import React, { useEffect, useState } from "react";
// import EditAppointmentDialog from "./EditAppointmentDialog";

// const Calendar = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [dates, setDates] = useState([]);
//   const [times, setTimes] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:3030/appointments")
//       .then((response) => response.json())
//       .then((data) => {
//         setAppointments(data);

//         // Extract unique dates and times
//         const uniqueDates = [
//           ...new Set(data.map((appointment) => appointment.date)),
//         ];
//         const uniqueTimes = [
//           ...new Set(data.map((appointment) => appointment.time)),
//         ];

//         setDates(uniqueDates);
//         setTimes(uniqueTimes);
//       });
//   }, []);

//   const getAppointment = (date, time) => {
//     return appointments.find(
//       (appointment) => appointment.date === date && appointment.time === time
//     );
//   };

//   const handleEditClick = (appointment) => {
//     setSelectedAppointment(appointment);
//     setIsEditDialogOpen(true);
//   };

//   const handleEditClose = () => {
//     setIsEditDialogOpen(false);
//     setSelectedAppointment(null);
//   };

//   const handleEditSave = (updatedAppointment) => {
//     fetch(`http://localhost:3030/appointments/${updatedAppointment.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedAppointment),
//     })
//       .then((response) => response.json())
//       .then(() => {
//         setAppointments(
//           appointments.map((app) =>
//             app.id === updatedAppointment.id ? updatedAppointment : app
//           )
//         );
//         handleEditClose();
//       });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Appointments</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-2 bg-gray-100">
//                 Time / Date
//               </th>
//               {dates.map((date, index) => (
//                 <th
//                   key={index}
//                   className="border border-gray-300 p-2 bg-gray-100"
//                 >
//                   {date}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {times.map((time, rowIndex) => (
//               <tr key={rowIndex}>
//                 <td className="border border-gray-300 p-2 bg-gray-50">
//                   {time}
//                 </td>
//                 {dates.map((date, colIndex) => {
//                   const appointment = getAppointment(date, time);
//                   return (
//                     <td key={colIndex} className="border border-gray-300 p-2">
//                       {appointment ? (
//                         <div>
//                           {appointment.name}
//                           <button
//                             className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             onClick={() => handleEditClick(appointment)}
//                           >
//                             Edit
//                           </button>
//                         </div>
//                       ) : (
//                         "No Appointment"
//                       )}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {selectedAppointment && (
//         <EditAppointmentDialog
//           open={isEditDialogOpen}
//           onClose={handleEditClose}
//           onSave={handleEditSave}
//           appointment={selectedAppointment}
//         />
//       )}
//     </div>
//   );
// };

// export default Calendar;

// src/components/Calendar.js
import React, { useEffect, useState } from 'react';
import EditAppointmentDialog from './EditAppointmentDialog';

const Calendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3030/appointments')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);

        // Extract unique dates and times
        const uniqueDates = [...new Set(data.map(appointment => appointment.date))];
        const uniqueTimes = [...new Set(data.map(appointment => appointment.time))];

        setDates(uniqueDates);
        setTimes(uniqueTimes);
      });
  }, []);

  const getAppointment = (date, time) => {
    return appointments.find(appointment => appointment.date === date && appointment.time === time);
  };

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setIsEditDialogOpen(true);
  };

  const handleEditClose = () => {
    setIsEditDialogOpen(false);
    setSelectedAppointment(null);
  };

  const handleEditSave = (updatedAppointment) => {
    fetch(`http://localhost:3030/appointments/${updatedAppointment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedAppointment)
    })
    .then(response => response.json())
    .then(() => {
      setAppointments(appointments.map(app => app.id === updatedAppointment.id ? updatedAppointment : app));
      handleEditClose();
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Time / Date</th>
              {dates.map((date, index) => (
                <th key={index} className="border border-gray-300 p-2 bg-gray-100">{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 p-2 bg-gray-50">{time}</td>
                {dates.map((date, colIndex) => {
                  const appointment = getAppointment(date, time);
                  return (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {appointment ? (
                        <div>
                          {appointment.name} ({appointment.doctor})
                          <button
                            className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={() => handleEditClick(appointment)}
                          >
                            Edit
                          </button>
                        </div>
                      ) : 'No Appointment'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedAppointment && (
        <EditAppointmentDialog
          open={isEditDialogOpen}
          onClose={handleEditClose}
          onSave={handleEditSave}
          appointment={selectedAppointment}
        />
      )}
    </div>
  );
};

export default Calendar;

