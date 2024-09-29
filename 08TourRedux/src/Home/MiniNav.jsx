import React from 'react'
import { Icon } from '@mui/material';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function MiniNav() {
  return (
    <div className='row shadow-lg'  style={{fontFamily:'serif', fontSize:'20px'}}><h2 className='border-bottom'>Explore the World</h2>
        <div className='col-4 '><BusinessCenterIcon/>Package</div>
        <div className='col-4 '><LocalHotelIcon/>Hotel</div>
        <div className='col-4 '><TravelExploreIcon/>Explore</div>
        
    </div>
  )
}

export default MiniNav