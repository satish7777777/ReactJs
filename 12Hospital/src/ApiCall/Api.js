import axios from "axios"

export async function getAllAppointment (){
    const response = await axios.get('http://localhost:3030/patient');
    console.log("responce---",response.data)
    return response.data;
}

export async function postBookAppointment (inputData){
    const response = await axios.post('http://localhost:3030/patient',inputData)
    console.log("responce---",response.data)
    return response.data;
}

export async function updateAppointment (editingId,updateData){
    const response = await axios.put(`${'http://localhost:3030/patient'}/${editingId}`,updateData);
    return response.data;
}

export async function getAppointmentId (user_id){
    const response = await axios.get(`http://localhost:3030/patient/${user_id}`);
    console.log("responce---",response.data)
    return response.data;
}
