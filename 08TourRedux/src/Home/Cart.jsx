import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
    const cart = useSelector(state =>state.homeImage)//getting data by useslecter
    // console.log("cartData",cart)

  return (
  <div className="container p-4" style={{ fontFamily: 'serif', fontSize: '20px' }}>
      <h1 className="mb-4">Explore Your Dream Travel Place</h1>
      <div className="row">
        {cart.map((element) => (//map the data
          <div key={element.id} className="col-md-4 mb-4">
            <Link
              to={{ pathname: "/citypage/" + element.id }}
              state={{ cityid: element.id }}
              className="text-decoration-none"
            >
              <div className="card h-100 shadow-sm">
                <img src={element.imgurl} className="card-img-top" alt={element.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
