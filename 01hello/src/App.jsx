import { useState } from 'react'
import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Second from './components/Second'
import Salary from './components/Salary'

function App() {
  // const [num1, setNum1] = useState(0)
  // const [num2, setNum2] = useState(0);
  //const [count, setCount] = useState('');

  
  return (
    <>
    <div className='bg-purple-200 w-full h-full'>
    {/* <Second />
     <Intro /> */}
     <Salary />
    </div>
    </>
  )
}

export default App
