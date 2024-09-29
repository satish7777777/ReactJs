import React from 'react'
import { useState } from 'react'

function EnterData({sendInput}) {
    const [inputData, setInputData] = useState({name:"", EmployeId:"",Placce:"",Salary:""})
    const [inputDataArr, setInputDataArr] = useState([])

    function storeData(){
        let alldata = JSON.parse(JSON.stringify(inputData))
        let alldataArr = JSON.parse(JSON.stringify(inputDataArr))
        alldataArr.push(alldata);
        setInputData(alldata);
        console.log("Dtaa",alldata);
        sendInput([...inputDataArr,inputData])
    }
    function changeHandle(e){
        console.log("value",e,e.target.name, e.target.value)
        setInputData({...inputData,[e.target.name]: e.target.value})
    }
    console.log("InputData", inputData)
  
  return (
    <div>
       <input className='border-4'  autoComplete='off' type="text" name="name" value={inputData.name} onChange={changeHandle} />
       <input className='border-4'  autoComplete='off' type="text" name="EmployeId" value={inputData.EmployeId} onChange={changeHandle} />
       <input className='border-4'  autoComplete='off' type="text" name="Placce" value={inputData.Placce} onChange={changeHandle} />
       <input className='border-4'  autoComplete='off' type="text" name="Salary" value={inputData.Salary} onChange={changeHandle} />

      <button onClick={storeData}>AddNew</button>
    </div>
  )
}

export default EnterData
