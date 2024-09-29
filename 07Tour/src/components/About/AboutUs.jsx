import React from 'react'

function AboutUs() {
  return (
    <div>
    <div style={{marginTop:128}}><h1 style={{textAlign:'center', fontFamily:'serif'}}>About Travel Tourisum</h1>
    <p style={{textAlign:'center',fontFamily:'serif'}}>Planning every single trip needs answers to a number of questions. Holidify is attempting to collect all the information that you will ever need to plan your trip - from when, where and how, to more hidden gems in every destination, Holidify is the one-stop solution to all your travel planning needs.</p>
    </div>
    <div className='container'><img style={{height:700, width:1150}} src='https://media.cntraveler.com/photos/598339c9b7a86962e8e27c5d/master/pass/Paris_GettyImages-601763009.jpg' />
    </div>
    <div><h3 style={{textAlign:'center', fontFamily:'serif', marginTop:20}}>Our Location</h3>
    <p style={{textAlign:'center', fontFamily:'serif'}}>Address: Mahavir Complex, 4A, Itki Rd, Ranchi, Jharkhand 834005</p></div>
    </div>
  )
}

export default AboutUs