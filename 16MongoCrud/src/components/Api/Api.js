import axios from 'axios';

const API_URL = "http://localhost:27017/api";

export async function createUser(inputData){
    try {
        const response = await axios.post(`${API_URL}/User`,inputData);
        return response.data;
    } catch (error) {
        console.log("Errorr", error);
        throw error;
    }
}

export async function getAllUsers(){
    try {
        const response = await axios.get(`${API_URL}/User/getall`);
        return response;
    } catch (error) {
        console.log("Errorr", error);
        throw error;
    }
}

export async function getUserById(_id) {
    try {
      const response = await axios.get(`${API_URL}/User/${_id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  }

export async function updateUser(_id,inputData){
    try {
        const response = await axios.put(`${API_URL}/User/${_id}`, inputData);
        return response.data;
    } catch (error) {
        console.log("Error",error);
        throw error;
    }
}

export async function deleteUser(_id){
    try {
        const response = await axios.delete(`${API_URL}/User/${_id}`);
        return response;
    } catch (error) {
        console.log("Errorr", error);
        throw error;
    }
}