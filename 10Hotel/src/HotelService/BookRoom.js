import axios from "axios"

export async function getAllRoomBookData (){
    const response = await axios.get('http://localhost:3030/room');
    //console.log("responce---",response.data)
    return response.data;
}
export async function postRoomBookData (inputData){
    const response = await axios.post('http://localhost:3030/room',inputData)
    console.log("responce---",response.data)
    return response.data;
}

export async function updateRoomBookById (editingId,updateData){
    const response = await axios.put(`${'http://localhost:3030/room'}/${editingId}`,updateData);
    return response.data;
}

export async function getRoomBookById (user_id){
    const response = await axios.get(`http://localhost:3030/room/${user_id}`);
    console.log("responce---",response.data)
    return response.data;
}

export async function deleteRoomBookById (editingId){
    const response = await axios.delete(`${'http://localhost:3030/room'}/${editingId}`);
    return response.data;
}

