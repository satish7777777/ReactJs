import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { contextData } from "./components/Context/Context";
import Home from "./components/Home/Home";
import MiniNav from "./components/Home/MiniNav";
import Cart from "./components/Home/Cart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityPage from "./components/CityPage/CityPage";
import AddCart from "./components/Checkout/AddCart";
import Login from "./components/Login/Login";
import AboutUs from "./components/About/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citypage/:cityId" element={<CityPage />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
