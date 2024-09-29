import React, { useState, useEffect } from "react";
import { contextData } from "./components/Context/Context";

// Create context
// const PostsContext = createContext();

// Create provider component
const PostContextData = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [cityAllData, setCityAllData] = useState([]);
  const [cart, setCart] = useState([]);

    const addToCart = (item) => {
      console.log("addToCart called--",item)
    
        const existingItem = cart.find(e=> e.itemId==item.cityId)

        if(!existingItem){
          setCart([...cart, item]);
        }
      
    };

  useEffect(() => {
    // Fetch data from JSON server
    fetch("http://localhost:3030/cities")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log("data----", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/place")
      .then((response) => response.json())
      .then((data) => {
        setCityAllData(data);
        console.log("CityAllData",data)
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <contextData.Provider value={{posts,addToCart,cart,setCart}}>
      {children}
    </contextData.Provider>
  );
};
export { PostContextData };
