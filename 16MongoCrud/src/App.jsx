import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Home from './components/Home'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { CommonComp } from './components/commoninput'

function App() {
  const [count, setCount] = useState(0)

const checking = (e)=>{
  console.log("checking",e.target.value)
}
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
{/* <CommonComp onchange={checking} /> */}
     
    </>
  )
}

export default App
