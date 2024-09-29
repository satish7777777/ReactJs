import React from 'react'
import {useState, useEffect} from 'react'

function Deduction({setDeductionResult,basic}) {
    const [deduction, setDeduction] = useState({FDS:0,PF:0})

    useEffect(() =>{
        console.log("Deduction",basic)
        setDeduction({...Deduction,FDS:basic*5/100,PF:basic*12/100})
    },[basic])

    useEffect(() =>{

        setDeductionResult(deduction.FDS+deduction.PF)
    },[deduction])

  return (
    <div>Deduction
        <div>FDS<input value={deduction.FDS}></input></div>
        <div>PF<input value={deduction.PF}></input></div>
    Total Deduction </div>
  )
}

export default Deduction