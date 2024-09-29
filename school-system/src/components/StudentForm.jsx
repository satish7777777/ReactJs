

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentForm = ({ selectedStudent, fetchStudents }) => {
//   const [student, setStudent] = useState({
//     name: '',
//     fatherName: '',
//     address: '',
//     marks: { math: '', science: '', english: '' }
//   });

//   useEffect(() => {
//     if (selectedStudent) {
//       setStudent(selectedStudent);
//     }
//   }, [selectedStudent]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleMarksChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prevState) => ({
//       ...prevState,
//       marks: {
//         ...prevState.marks,
//         [name]: value
//       }
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (student.id) {
//       axios.put(`http://localhost:5000/students/${student.id}`, student)
//         .then(fetchStudents);
//     } else {
//       axios.post('http://localhost:5000/students', student)
//         .then(fetchStudents);
//     }
//     setStudent({
//       name: '',
//       fatherName: '',
//       address: '',
//       marks: { math: '', science: '', english: '' }
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Name</label>
//         <input type="text" name="name" value={student.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Father's Name</label>
//         <input type="text" name="fatherName" value={student.fatherName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Address</label>
//         <input type="text" name="address" value={student.address} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Math Marks</label>
//         <input type="number" name="math" value={student.marks.math} onChange={handleMarksChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Science Marks</label>
//         <input type="number" name="science" value={student.marks.science} onChange={handleMarksChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">English Marks</label>
//         <input type="number" name="english" value={student.marks.english} onChange={handleMarksChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
//       </div>
//       <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow">
//         {student.id ? 'Update' : 'Submit'}
//       </button>
//     </form>
//   );
// };

// export default StudentForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentForm = ({ selectedStudent, fetchStudents }) => {
  const [student, setStudent] = useState({
    name: '',
    fatherName: '',
    address: '',
    marks: { math: '', science: '', english: '' }
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      marks: {
        ...prevState.marks,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      axios.put(`http://localhost:5000/students/${student.id}`, student)
        .then(fetchStudents);
    } else {
      axios.post('http://localhost:5000/students', student)
        .then(fetchStudents);
    }
    setStudent({
      name: '',
      fatherName: '',
      address: '',
      marks: { math: '', science: '', english: '' }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={student.name}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
      <input
        type="text"
        id="fatherName"
        name="fatherName"
        value={student.fatherName}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={student.address}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="math" className="block text-sm font-medium text-gray-700">Math Marks</label>
      <input
        type="number"
        id="math"
        name="math"
        value={student.marks.math}
        onChange={handleMarksChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="science" className="block text-sm font-medium text-gray-700">Science Marks</label>
      <input
        type="number"
        id="science"
        name="science"
        value={student.marks.science}
        onChange={handleMarksChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="english" className="block text-sm font-medium text-gray-700">English Marks</label>
      <input
        type="number"
        id="english"
        name="english"
        value={student.marks.english}
        onChange={handleMarksChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow"
    >
      {student.id ? 'Update' : 'Submit'}
    </button>
  </form>
  );
};

export default StudentForm;
