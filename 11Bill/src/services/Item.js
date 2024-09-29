import axios from 'axios';

export async function postAllItem(data){
    const response = await axios.post('http://localhost:3030/item',data);
    console.log("responce---",response.data)
    return response.data;
}

export async function getAllItem (){
    const response = await axios.get('http://localhost:3030/item');
    console.log("responce---",response.data)
    return response.data;
}
