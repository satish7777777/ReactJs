import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiPlace } from "../ApiCall/ApiCall";
import { useLocation } from "react-router-dom";
import {addCart} from '../feature/Handel/Apihandle'
import { increment } from "../feature/Handel/Apihandle";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function CityPage() {

  const [addCartData, setAddCartData] = useState('')
  let dispatch = useDispatch();
  const location = useLocation();
  const cityId = location.state.cityid;
  console.log("cityId");
  const cityData = useSelector((state) =>{
    console.log('====================================');
    console.log("statestate",state);
    console.log('====================================');
    return state.placeData
  
  });
  
  // console.log("cityData", cityData);
  // let price = cityData.ticketPrice

  useEffect(() => {
    console.log("userData---", cityId);
  }, []);

  useEffect(() => {
    ApiPlace(dispatch, cityId);
  }, []);

  const notify = () => toast.success("Added To Cart");//PoPup message with help of tostify

const handleClick = (e) =>{//call dispatch function of add cart and increment in badge
  dispatch(addCart(e))
  dispatch(increment())
  
}
  return (
 
    <div className="container mt-5" >
      <div className="row" style={{marginTop:135}}>
        {cityData.map((e, i) => (//mapping  the data 
          <div key={i} className="col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={e.image}
                className="card-img-top"
                alt={e.title}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.description}</p>
            
                <button
                  onClick={() =>{ handleClick(e),notify()}}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                 
                  Book Package
                </button>
                <ToastContainer />
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityPage;
