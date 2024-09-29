import React from 'react'
import { useLocation } from 'react-router-dom'

function ProductPage() {
  let location = useLocation();
  console.log('====================================');
  console.log("location",location.state);
  console.log('====================================');
  return (
    <div>
       <div className="row border">
       <div className="col-5"><img className='border' src={location.state.image} style={{height:'500px',width:'500px'}}></img></div>
       <div className="col-7">
       <div><h3>{location.state.title}</h3></div>
       <div><p>Price: $<strong style={{fontSize:'1.5rem'}}>{location.state.price}</strong></p></div>
       <div><p>Brand:<strong> {location.state.brand}</strong></p>
       <p>Category: {location.state.category}</p>
       <p>Color: {location.state.color}</p>
       <p>Model: {location.state.model}</p></div>
       <div>{location.state.description}</div>
       </div>
        </div>
    </div>
  )
}

export default ProductPage