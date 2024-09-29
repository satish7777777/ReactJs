import React, { useEffect } from 'react'
import { useState } from 'react'

function Enter({setformData,...props}) {
  const [inputData, setInputData] = useState({name:"",ID:"",Address:"",Srole:""})
  const [inputArr, setInputArr] = useState([])

  // const sendData = () =>{
  //   props.onChildData(inputArr);
  // }
  function changeHandle(e) {//set and take data from the INPUT
    console.log("changeHandle",e,e.target.name,e.target.value);
    setInputData({//set the INPUT data
      ...inputData,[e.target.name]: e.target.value
    })
  }

  
  function storeData(){//Store input data from 
    let {name,ID,Address,Srole} = inputData;
    // setInputArr([...inputArr,{name,ID,Address,Srole}])
    let alldata = JSON.parse(JSON.stringify(inputData))
    let alldatainputArr = JSON.parse(JSON.stringify(inputArr))
    alldatainputArr.push(alldata);
    setInputArr([...inputArr,inputData])
    setformData([...inputArr,inputData])

    // setformData((prev)=>{
    //   prev.push(inputData);
    //   return prev
    // })
//     setInputArr((prev)=>{
// console.log("prev",prev);

//       prev.push(alldata);
//       return prev
//     })
    setInputData({name:"",ID:"",Address:"",Srole:""})
  
  }
  useEffect(()=>{
//console.log("inputData",inputData);
console.log("setInputArr",inputArr);

  },[inputData])
  function sendDa() {
    // sendData();
    storeData();
  }
    
  return (
    <div>Enter Name
        <input className='border-4'
                  autoComplete='off' type="text" name="name" value={inputData.name}
                    onChange={changeHandle}/>
        ID <input className='border-4' 
                  autoComplete='off' type='text' name='ID' value={inputData.ID} 
                    onChange={changeHandle}/>
        Address<input className='border-4' 
                  autoComplete='off' type='text' name='Address' value={inputData.Address} 
                  onChange={changeHandle}/>
        {/* Role Type <select className='border-4'
                   autoComplete='off' type='text' name='Role' value={inputData.Role}
                   onChange={changeHandle}/> */}
        Select Role  <select name="Srole" onChange={changeHandle} value={inputData.Srole}>
                      <option value={"Admin"}>Admin</option>
                        <option value={"Devloper"}>Devloper</option>
                         <option value={"Training"}>Training</option>
                          <option value={"HR"}>HR</option>
  </select>
        <button onClick={sendDa}>Add Employe</button>


    </div>
  )
}

export default Enter