import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Rooms from './components/Rooms'
import RoomServices from './components/RoomServices'
import Report from './components/Report'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <>
      <BrowserRouter>
      <div className="flex h-screen">
      <Sidebar />
        <div className="flex-grow p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roomservices" element={<RoomServices />} />
            <Route path="/room" element={<Rooms />} />
            <Route path='/report' element={<Report />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
   {/*  */}
    </>
  )
}

export default App
