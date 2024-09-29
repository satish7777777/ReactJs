import React from 'react'
import { useState,useEffect } from 'react'
import DisplayData from './EmployeDetail/DisplayData'
import Enter from './EmployeDetail/Enter'

function Employe() {
    const [data,SetData] = useState([])

    const deleteData =() =>{
      console.log("++++++");
      SetData([]);
    }

    useEffect(()=>{
        console.log("data",data)
    
      },[data])
  return (
    <div>Employe
          <Enter setformData={SetData}/>
      <DisplayData data={data} deleteData={deleteData}/>
    </div>
  )
}

export default Employe