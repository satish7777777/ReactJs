import React from 'react'
import {useState} from 'react'
import {useEffect} from'react'

function Earning({setEarningResult,basic}) {
    const [earning, setEarning] = useState(
        {HRA:0, 
            DA:0, 
            TA:0})

    // const OnchangeEarningData = (value,name) =>{
    //     console.log("OnchangeAllowance", value,name);
    //     setEarning({...earning,[name]:value})
    // }

useEffect(()=>{
    console.log("earning",earning)
    setEarning({...earning,HRA:basic*40/100,DA:basic*20/100,TA:basic*10/100})
},[basic])

useEffect(()=>{
    setEarningResult(earning.HRA+earning.DA+earning.TA)
},[earning])
  return (
    <div>Earning
        <div>HRA <input  value={earning.HRA} /></div>
        <div>DA <input value={earning.DA}></input></div>
        <div>TA <input value={earning.TA} /></div>
    Gross Salary</div>
  )
}

export default Earning