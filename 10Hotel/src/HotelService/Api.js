import axios from "axios"

export async function getAllData (){
    const response = await axios.get('http://localhost:3030/roomtype');
    console.log("responce---",response.data)
    return response.data;
}

export async function deleteRoomTypeById (editingId){
    try{
    const response = await axios.delete(`${'http://localhost:3030/roomtype'}/${editingId}`);
    return response.data;
    }
    catch(ex){
        throw ex;
    }
}

export async function postRoomTypeData (inputData){
    const response = await axios.post('http://localhost:3030/roomtype',inputData)
    console.log("responce---",response.data)
    return response.data;
}

export async function updateRoomTypeById (editingId,updateData){
    const response = await axios.put(`${'http://localhost:3030/roomtype'}/${editingId}`,updateData);
    return response.data;
}

export async function getRoomTypeById (user_id){
    const response = await axios.get(`http://localhost:3030/roomtype/${user_id}`);
    console.log("responce---",response.data)
    return response.data;
}



