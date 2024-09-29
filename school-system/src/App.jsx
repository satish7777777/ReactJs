
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = () => {
    axios.get('http://localhost:5000/students')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error('Error fetching students:', error));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const openModal = () => {
    setSelectedStudent(null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-slate-50 text-white p-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-black">School Management</h1>
          </div>
          <nav className="space-y-4">
            <button 
              onClick={openModal} 
              className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Create Student Record
            </button>
            <Link to="/students" className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Show Students Details
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/students" element={<StudentList students={students} setSelectedStudent={setSelectedStudent} fetchStudents={fetchStudents} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Student Form"
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <StudentForm selectedStudent={selectedStudent} fetchStudents={fetchStudents} />
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow">
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Router>
  );
};

// Dummy Home component to handle the default route '/'
const Home = () => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Welcome to School Management System</h2>
    <p className="text-lg text-gray-700">Use the navigation to manage students.</p>
  </div>
);

export default App;
