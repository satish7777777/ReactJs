import React from 'react'
import { useDispatch } from 'react-redux'
import { addImage, addPlace } from '../feature/Handel/Apihandle'
import { todoSlice } from '../feature/Handel/Apihandle'


export default function ApiCall(dispatch) {//API call for cities and dispatch to Aihandle
   
        fetch("http://localhost:3030/cities")
        .then((response) => response.json())
        .then((data) => {
          
          //console.log("data----", data);

          dispatch(addImage(data))
        //   state.homeImage.push(data)
        })
        .catch((error) => console.error("Error fetching data:", error))
}
export function ApiPlace(dispatch,id){//API call for Place by specific cityId and dispatch to Aihandle
    console.log('Dispatch', id)
    fetch(`http://localhost:3030/places?cityId=${id}`)
    .then((response) => response.json())
    .then((dataa) => {
        console.log("PlaceData", dataa)
        dispatch(addPlace(dataa))
        // return dataa;
    })
    .catch((error) => console.error("Error",error))
}


