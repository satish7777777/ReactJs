import { useState,useEffect } from 'react'
import './App.css'
import Basic from './components/Basic'
import Deduction from './components/Deduction'
import Earning from './components/Earning'
import NetSalary from './components/NetSalary'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  const [earningresult, setEarningResult] = useState(0);
  const [deductionResult, setDeductionResult] = useState(0);
  const [basic, setBasic] = useState(0);
  const [netSalary , setNetSalary] = useState(0);
  // useEffect(() =>{
  //   setEarningResult(0);
  //   setDeductionResult(0);
  //   setBasic(0);
  //   setNetSalary(0);
  // },[])

  useEffect(()=>{
    console.log("earningresult-deductionResult--",earningresult,deductionResult)
    setNetSalary(basic+earningresult-deductionResult);
  },[basic])
  return (
    <>
     {/* <h1>Salary</h1>
     
     <Basic setBasic={setBasic} />
     <Deduction setDeductionResult={setDeductionResult} basic={basic}/>
     <Earning setEarningResult={setEarningResult} basic={basic}/>
     <h1>Net Salary {netSalary}</h1>
     <NetSalary newsalary={basic+earningresult-deductionResult} /> */}
     <Header />
     <Body />
     <Footer />
    </>
  )
}

export default App
