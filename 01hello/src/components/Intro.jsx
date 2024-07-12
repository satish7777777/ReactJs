import React from 'react'
import { useState } from 'react';

function Intro() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function calculate(){
        setResult(num1 + num2);
      }
    
  return (
    <div className='border-solid border-2 bg-orange-200'>
        <h3>Enter Your Number:-</h3>
        <input placeholder="abhishek" type='number' value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} className='border-dotted border-2 rounded-2xl'></input>
        <h3>Enter Second Number:-</h3>
        <input type='number' value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} className='border-dashed border-2 rounded-2xl'></input><br/>
        <button className='bg-indigo-300 rounded-full' onClick={calculate}>Sum is {result}</button>
   
    </div>
  )
}



export default Intro