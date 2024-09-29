import React from 'react'
import HomeImage from './HomeImage'
import MiniNav from './MiniNav'
import Cart from './Cart'
import Article from './Article'

function Home() {
  return (
    <>
    <HomeImage />
    <div className='row'>
      <div className='col-8'>
        <MiniNav />
        <Cart />
      </div>
      <div className='col-4 h-100 scrollable overflow-auto'>
        <Article />
      </div>
    </div>
    </>
  )
}

export default Home