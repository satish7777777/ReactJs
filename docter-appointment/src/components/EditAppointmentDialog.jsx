// src/components/EditAppointmentDialog.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const EditAppointmentDialog = ({ open, onClose, onSave, appointment }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (appointment) {
      setFormData(appointment);
    }
  }, [appointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Appointment</DialogTitle>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAppointmentDialog;
