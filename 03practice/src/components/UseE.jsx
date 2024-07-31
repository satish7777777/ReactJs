import React from 'react'
import { useState } from "react";


function UseE() {

    const bgChange =() =>{
        console.log("Clicked")
        const purple  = "#8e44ad";
       const [bg, setBg]=useState(purple);
    }
   
  return (
    <div style={{backgroundColor:'purple'}}>
        <button onClick={bgChange} className='px-4 py-4 border-amber-500 border-solid bg-orange-600 cursor-pointer border-y-green-200'> clickME</button>
   </div>
  )
}

export default UseE

// className='bg-zinc-600  h-4/5 w-3/4 {{bg-r}}'