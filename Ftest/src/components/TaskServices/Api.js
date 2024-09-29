import axios from "axios";

const API_URL = 'http://localhost:5000/api/users';

export async function getAllData() {
  const response = await axios.get(`${API_URL}/`);
  return response.data;
}

export async function getAllServices() {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
}

export async function getRoomTypeById(id) {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}

export async function postRoomTypeData(inputData) {
  const response = await axios.post(`${API_URL}`, inputData);
  return response.data;
}

export async function updateRoomTypeById(id, inputData) {
  const response = await axios.put(`${API_URL}/roomtype/${id}`, inputData);
  return response.data;
}

export async function deleteRoomTypeById(id) {
  const response = await axios.delete(`${API_URL}/roomtype/${id}`);
  return response.data;
}

export async function postRoomServiceData(inputData) {
  const response = await axios.post(`${API_URL}/roomServices`, inputData);
  return response.data;
}

export async function getAllRoomServices() {
  const response = await axios.get(`${API_URL}/roomServices`);
  return response.data;
}
