import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Test from './components/Test';
import Employe from './components/Employe';
import Salary from './components/Salary/Salary';


const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children:[
      {
        path:"/salary",
        element:<Salary />
      },
      {
        path:"test",
        element:<Test />
      },
      {
        path:"Employe",
        element:<Employe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <RouterProvider router={router} /> 
 
  </React.StrictMode>,
)