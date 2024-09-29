import React, { useEffect, useState } from "react";
import { contextData } from "../Context/Context";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
// import {useCart} from '../../PostContext'
function CityPage() {
  const location = useLocation();
  const cityId = location.state.cityid;
//   const cityData = useContext(contextData);
  const {posts,addToCart} = useContext(contextData);
  const cityData =posts
//   const { addToCart } = useCart();

  const [showData, setShowData] = useState([]);


  useEffect(() => {
    console.log("userData---", cityId, cityData);
    placesData();
  }, [cityData]);

  const handleClick =(element) =>{
    console.log("added to cart ")
    // const item = {id :, price: 121};
    addToCart(element);
  };




  const placesData = async () => {
    fetch(`http://localhost:3000/place/${cityId}`) // Adjust the URL as needed
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let finalData = [];
        finalData.push(data)
        setShowData(finalData)
        // Data has been received successfully
        // return data; // Return the data to the caller
        //console.log("placeData---",data)
        console.log("ShowData", finalData)
      })
      .catch((error) => {
        // Error handling
        console.error("There was a problem with your fetch operation:", error);
        return null; // Return null or handle the error as needed
      });
  };
  console.log("cityData", cityData);
  return <div className="container p-4" style={{ marginTop: 110 }}>
    
        {showData.map((element) =>(
            <div key={element.id} className="col-md-4 mb-3">
            <div className="row">
            <div className='row-4'>
                <img src={element.image} />
          
          </div>
          <div className='row-8'>
            <p>Destination Name:  {element.title}</p>
            <p>Package: {element.ticketPrice}</p>
            <p>{element.description}</p>
            <button onClick={()=>handleClick(element)} type="button" class="btn btn-primary btn-lg" style={{marginRight:25}}>Add to Travel Bucket</button>
            <button type="button" class="btn btn-primary btn-lg" style={{marginLeft:5}}>Checkout</button>
           
          </div>
          </div>
          </div>
        ))}
        </div>
}

export default CityPage;
