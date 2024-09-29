import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CityPage from './CityPage/CityPage';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import CheckoutCart from './CheckOut/CheckoutCart';
import AboutUs from './AboutUs/AboutUs';
import Login from './Login/LogIn';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
<BrowserRouter>

    <Header />
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/citypage/:cityId"} element={<CityPage/>} />
      
      <Route path={"/addtocart"} element={<CheckoutCart/>} />
      <Route path={"/aboutus"} element={<AboutUs/>}/>
      <Route path={"/login"} element={<Login />}/>
    </Routes>
    
    <Footer />
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
