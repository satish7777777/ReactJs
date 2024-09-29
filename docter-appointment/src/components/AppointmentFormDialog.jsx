

// src/components/AppointmentFormDialog.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const AppointmentFormDialog = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    doctor: ''
  });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from server or use a hardcoded list
    fetch('http://localhost:3030/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => {
        console.error('Error fetching doctors:', error);
        // Fallback to a hardcoded list if needed
        setDoctors([
          { id: 1, name: 'Dr. Smith' },
          { id: 2, name: 'Dr. Jones' },
        ]);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Date"
          type="date"
          name="date"
          fullWidth
          value={formData.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Time"
          type="time"
          name="time"
          fullWidth
          value={formData.time}
          onChange={handleChange}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="doctor-label">Doctor</InputLabel>
          <Select
            labelId="doctor-label"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          >
            {doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentFormDialog;



// src/components/AppointmentFormDialog.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   FormHelperText
// } from '@mui/material';

// const AppointmentFormDialog = ({ open, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     date: '',
//     time: '',
//     doctor: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     // Fetch doctors from server or use a hardcoded list
//     fetch('http://localhost:3030/doctors')
//       .then(response => response.json())
//       .then(data => setDoctors(data))
//       .catch(error => {
//         console.error('Error fetching doctors:', error);
//         // Fallback to a hardcoded list if needed
//         setDoctors([
//           { id: 1, name: 'Dr. Smith' },
//           { id: 2, name: 'Dr. Jones' },
//         ]);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Validate on change
//     validate({ ...formData, [name]: value });
//   };

//   const validate = (data) => {
//     const newErrors = {};
//     if (!data.name) newErrors.name = 'Name is required';
//     if (!data.date) newErrors.date = 'Date is required';
//     if (!data.time) newErrors.time = 'Time is required';
//     if (!data.doctor) newErrors.doctor = 'Doctor selection is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (validate(formData)) {
//       onSave(formData);
//       onClose();
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogTitle>Book an Appointment</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Name"
//           type="text"
//           name="name"
//           fullWidth
//           value={formData.name}
//           onChange={handleChange}
//           error={!!errors.name}
//           helperText={errors.name}
//         />
//         <TextField
//           margin="dense"
//           label="Date"
//           type="date"
//           name="date"
//           fullWidth
//           value={formData.date}
//           onChange={handleChange}
//           error={!!errors.date}
//           helperText={errors.date}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           margin="dense"
//           label="Time"
//           type="time"
//           name="time"
//           fullWidth
//           value={formData.time}
//           onChange={handleChange}
//           error={!!errors.time}
//           helperText={errors.time}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <FormControl fullWidth margin="dense" error={!!errors.doctor}>
//           <InputLabel id="doctor-label">Doctor</InputLabel>
//           <Select
//             labelId="doctor-label"
//             name="doctor"
//             value={formData.doctor}
//             onChange={handleChange}
//           >
//             {doctors.map((doctor) => (
//               <MenuItem key={doctor.id} value={doctor.name}>
//                 {doctor.name}
//               </MenuItem>
//             ))}
//           </Select>
//           {errors.doctor && <FormHelperText>{errors.doctor}</FormHelperText>}
//         </FormControl>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="primary">Cancel</Button>
//         <Button onClick={handleSubmit} color="primary" disabled={!validate(formData)}>Save</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AppointmentFormDialog;
