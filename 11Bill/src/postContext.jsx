import React, { useState, useEffect } from "react";
import { contextData } from "./components/Context/Context";

const PostContextData = ({ children }) => {

    

//   const [cityAllData, setCityAllData] = useState([]);
//   const [cart, setCart] = useState([]);

//     const addToCart = (item) => {
//       console.log("addToCart called--",item)
//         const existingItem = cart.find(e=> e.itemId==item.cityId)
//         if(!existingItem){
//           setCart([...cart, item]);
//         }
//     };

//   useEffect(() => {
//     fetch("http://localhost:3030/place")
//       .then((response) => response.json())
//       .then((data) => {
//         setCityAllData(data);
//         console.log("CityAllData",data)
//       })
//       .catch((error) => console.error("Error fetching data", error));
//   }, []);


  return (
    <contextData.Provider value={{addToCart,cart,setCart}}>
      {children}
    </contextData.Provider>
  );
};
export { PostContextData };