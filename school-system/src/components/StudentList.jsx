import React from 'react';
import axios from 'axios';

const StudentList = ({ students, setSelectedStudent, fetchStudents }) => {

  const handleEditClick = (student) => {
    setSelectedStudent(student);
  };

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(fetchStudents);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Student</label>
        <select onChange={(e) => {
          const student = students.find(student => student.id === parseInt(e.target.value));
          setSelectedStudent(student);
        }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          <option value="">Select Student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
      </div>
      {students.map(student => (
        <div key={student.id} className="mt-4 p-4 border rounded-md">
          <h3 className="text-lg font-bold">{student.name}</h3>
          <p><span className="font-medium">Father's Name:</span> {student.fatherName}</p>
          <p><span className="font-medium">Address:</span> {student.address}</p>
          <p><span className="font-medium">Math Marks:</span> {student.marks.math}</p>
          <p><span className="font-medium">Science Marks:</span> {student.marks.science}</p>
          <p><span className="font-medium">English Marks:</span> {student.marks.english}</p>
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => handleEditClick(student)} 
              className="bg-yellow-500 text-white px-4 py-2 rounded">
              Edit
            </button>
            <button 
              onClick={() => handleDeleteClick(student.id)} 
              className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;

