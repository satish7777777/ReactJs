import React from 'react'
import HomeImage from './HomeImage'
import MiniNav from './MiniNav'
import Cart from './Cart'
import Article  from './Article'

function Home() {
  return (
    <>
    
    <div className=" mt-5" style={{marginTop:500}}>
      <HomeImage />
      <div className="row mt-4">
        <div className="col-lg-8 mb-4">
          <MiniNav />
          <Cart />
        </div>
        <div className="col-lg-4 h-100">
          <div className="scrollable overflow-auto" style={{ maxHeight:1600 }}>
            <Article />
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Home