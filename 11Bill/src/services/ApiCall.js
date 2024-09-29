import axios from 'axios';

export async function getAllCustomer (){
    const response = await axios.get('http://localhost:3030/bill');
    console.log("responce---",response.data)
    return response.data;
}

export async function postCustomerDetail (formData){
    const response = await axios.post('http://localhost:3030/bill',formData)
    console.log("responce---",response.data)
    return response.data;
}

export async function getCustomerById (user_id){
    const response = await axios.get(`http://localhost:3030/bill/${user_id}`);
    console.log("responce---",response.data)
    return response.data;
}


export async function updateCustomerById (editingId,updateData){
    const response = await axios.put(`${'http://localhost:3030/bill'}/${editingId}`,updateData);
    return response.data;
}
