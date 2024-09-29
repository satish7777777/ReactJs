import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart() {
  return (
    <>
          {categoryData.map((element) =>{
            return(
              <Link to={"/productpage"} state={element}>
              
              
              <div className="card col-sm-4"  style={{ width: "13rem", height:"auto", margin:20 }}>
              <img className="card-img-top" src={element.image} alt="Card image cap" style={{height:"130px", width:"12rem"}}>
                
              </img>
              <div className="card-body">
                <h5 className="card-title">{element.title.slice(0,11)}</h5>
                

                <p className="card-text m-0 p-0">
                  {element.description.slice(0,15)}
                   Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <span>Discount:<strong>{element.discount}</strong></span>
                <h5>Brand:{element.brand}</h5><br/>
                <div className="m-0 p-0">
                <p className="m-0 p-0">$<strong>{element.price}</strong> </p>
                <button className="btn btn-primary globalBGColour text-black"
                onClick={()=>cartDetail(element)}><ShoppingCartIcon />Add To Cart</button>
                
                  <a href="#" className="btn btn-primary bg-warning text-black">
                  Add to Cart
                </a> 
                
                 </div>
               
              </div>
            </div>
            </Link>
            )
          })} 
         
    </>
  )
}

export default Cart