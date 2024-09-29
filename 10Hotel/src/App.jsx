import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveDrawer from "./components/Sidebar/ResponsiveDrawer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Room from "./components/Sidebar/Room/Room";
import RoomTypes from "./components/Sidebar/Room/RoomTypes";
import Home from "./components/Sidebar/Home/Home";
import Sidebar from "./components/Sidebar/ResponsiveDrawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div className="flex h-screen">
        <ResponsiveDrawer />
        <div className="flex-grow p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roomtype" element={<RoomTypes />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}


export default App;
