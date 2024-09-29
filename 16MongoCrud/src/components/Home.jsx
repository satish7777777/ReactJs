import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser, updateUser, getUserById } from "./Api/Api";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Signup from "./signup"; // Ensure this is the correct path
import { CommonComp } from "./commoninput";

function Home() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showSignup, setShowSignup] = useState(false); // Added state for showing signup
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      let response = await getAllUsers();//get all data 
      setUsers(response.data);//set to the users
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
    
  };
  console.log("Users",users);


  const handleCloseSignUp = () => {
    setShowSignup(false); // Corrected the function to set the right state
  };

  const handleDelete = async (_id) => {
    try {
      await deleteUser(_id);//if id then delete api call
      setUsers(users.filter((user) => user._id !== _id));//set user by filter the userid
      console.log("Deleted user with ID:", _id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    
    setInputData((inputData) => ({
      ...inputData,
      [name]: value,
    }));
  
     if (inputData._id) {//if inputData have id
      try {
        let response = await getUserById(inputData._id);//get the unique user data
        setInputData(response.data); // set the user data that have to update
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    }
    console.log("INPUTSDATAAA", inputData);
  };
  
  const handleEdit = async (_id) => {
    setEditId(_id);
    setShowSignup(true);
    try {
      let response = await getUserById(_id);
      setInputData(response); // set the response in setUsers
      console.log("response",response);
    } catch (error) {
      console.log("ERRROR", error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await updateUser(editId, inputData); // Update user
      } else {
        await createUser(inputData); // Create new user
      }
      setShowSignup(false); // Close the signup modal
      getAllData(); // Refresh the user list
      setInputData({ username: "", email: "", password: "", phoneNumber: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Email</th>
              <th className="px-4 py-2 border-b text-center">Phone</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-2 border-b text-center">
                  {user.username}
                </td>
                <td className="px-4 py-2 border-b text-center">{user.email}</td>
                <td className="px-4 py-2 border-b text-center">
                  {user.phoneNumber}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    <BorderColorIcon />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-black hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <DeleteForeverIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showSignup && (
        <CommonComp
          handleInputChange={handleInputChange}
          buttonName={"update Up"}//send button name
          inputData={inputData}
          handleSubmit={handleSubmit}
          handleCloseSignUp={handleCloseSignUp}
          //handleEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default Home;

