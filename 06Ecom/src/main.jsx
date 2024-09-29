import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddCart from './components/AddCart/AddCart.jsx'
import ProductPage from './components/AddCart/ProductPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Product from './components/Product/Product.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:"",
      element:<Product />
    },
    {
      path:"AddToCart",
      element:<AddCart />
    },
    {
      path:"ProductPage",
      element:<ProductPage />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <App /> */}
   <RouterProvider router={router} />
  </React.StrictMode>,
)
