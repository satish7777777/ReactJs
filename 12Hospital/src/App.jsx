import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Book/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className="text-3xl font-bold underline">Hospital Booking System</h1>
      <Home />
    </>
  )
}

export default App
