
// // src/App.js
// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import AppointmentFormDialog from './components/AppointmentFormDialog';
// import Calendar from './components/Calendar';

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSave = (appointment) => {
//     fetch('http://localhost:3030/appointments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(appointment)
//     })
//     .then(response => response.json())
//     .then(data => console.log('Appointment saved:', data));
//   };

//   return (
//     <div className="p-4">
//       <Button variant="contained" color="primary" onClick={handleOpen} className="mb-4">
//         Book Appointment
//       </Button>
//       <AppointmentFormDialog open={open} onClose={handleClose} onSave={handleSave} />
//       <Calendar />
//     </div>
//   );
// };

// export default App;


// src/App.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import AppointmentFormDialog from './components/AppointmentFormDialog';
import Calendar from './components/Calendar';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (appointment) => {
    fetch('http://localhost:3030/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(data => console.log('Appointment saved:', data));
  };

  return (
    <div className="p-4">
      <Button variant="contained" color="primary" onClick={handleOpen} className="mb-4">
        Book Appointment
      </Button>
      <AppointmentFormDialog open={open} onClose={handleClose} onSave={handleSave} />
      <Calendar />
    </div>
  );
};

export default App;
