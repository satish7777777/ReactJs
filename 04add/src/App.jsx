import { useEffect, useState } from 'react'
import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  // const [data,SetData] = useState([])

  // const deleteData =() =>{
  //   console.log("++++++");
  //   SetData([]);
  // }


  // const add = ()=>{
  //   console.log("AAdd")
  //   setCount(count+1)

  // }
  // const sub = ()=>{
  //   console.log("Subtract")
  //   setCount(count-1)
  // }
  // useEffect(()=>{
  //   console.log("data",data)

  // },[data])

  return (
    <>
     <h1><NavLink to="/">Calculation</NavLink></h1>
     <h1><NavLink to="/test">ADD</NavLink></h1>
     <h1><NavLink to="/Employe">Employe</NavLink></h1>
     <h1><NavLink to="/salary">Salary</NavLink></h1>
     {/* <EventsButton add={add} sub={sub}/> */}
      {/* <Test/> */}
      {/* <Display data={count}/> */}
      {/* <Enter setformData={SetData}/>
      <DisplayData data={data} deleteData={deleteData}/> */}
      {/* <h1><NavLink to="/test"></NavLink></h1> */}

      <Outlet />
      <div><h1>home page </h1></div>
    </>
  )
}

export default App
