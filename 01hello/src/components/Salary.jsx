import React from "react";
import { useState } from "react";

function Salary() {
  const [salary, setSalary] = useState(0);
  const [hra, setHra] = useState(0);
  const [da, setDa] = useState(0);
  const [ta, setTa] = useState(0);
  const [fds, setFds] = useState(0);
  const [pf, setPf] = useState(0);
  const [gross, setGross] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
 
  function sGross(hra, da, ta) {//calculate Gross Salary
    setGross(salary +hra+ da+ ta);
    //console.log(salary, hra, da, ta);
    
  }
  function tDeduct(fds, pf) {//calculate deduction amount 
    setDeduction(fds+pf);
  }

  function nSalary(gross,deduction) {//calculate netSalary
    setNetSalary(gross - deduction);
  }

  const populateAmount = () => {//function hold data of all varaiables
    const hra = (salary * 40) / 100;
    const da = (salary * 20) / 100;
    const ta = (salary * 10) / 100;
    const tds = (salary * 5) / 100;
    const pf = (salary * 12) / 100;
    const gross = (salary+hra+da+ta);
    const deduction = (tds+pf);

    setHra(hra);
    setDa(da);
    setTa(ta);
    setFds(tds);
    setPf(pf);
    sGross(hra, da, ta);//Gross Function call
    tDeduct(fds,pf);//Total Deduction function call
    nSalary(gross,deduction);////NetSalary function call
  };
  return (
    <>
      <div className="bg-gray-50 gap-4">
        <h5 className="text-lg text-amber-600	">
          Basic Salary
          <input
            type="number"
            placeholder="Gross Salary"
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
            className="gap-4 mr-4 ml-4"
          ></input>
        </h5>
      </div>
      <div className="w-[1200px] mx-auto grid lg:grid-cols-2 gap-4 bg-green-600">
        <div className="bg-green-600">Earning</div>
        <div className="bg-red-500">Deduction</div>
      </div>
      <div className="w-[1200px] mx-auto grid lg:grid-cols-4 gap-4 bg-yellow-500">
        <div>HRA</div>
        <div>
          <input
            type="number"
            placeholder="HRA Amount"
            value={hra}
            className="gap-4"
          ></input>{" "}
          
        </div>
        <div>FDS</div>
        <div>
          <input
            type="number"
            placeholder="FDS Deduction"
            value={fds}
            className="gap-4"
          ></input>
        </div>
        <div>DA</div>
        <div>
          <input
            type="number"
            placeholder="DA Deduction"
            value={da}
            className="gap-4"
          ></input>
        </div>
        <div>PF</div>
        <div>
          <input
            type="number"
            placeholder="PF Deduction"
            value={pf}
            className="gap-4"
          ></input>
        </div>
      </div>

      <div className="w-[1200px] mx-auto grid lg:grid-cols-4 gap-4">
        <div>TA</div>
        <div>
          <input
            type="number"
            placeholder="TA Amount"
            value={ta}
            className="gap-4 mt-5"
          ></input>
        </div>
        <div></div>
        <div></div>
        <div>Gross Salary<span className="font-black ml-4 text-xl text-teal-500">{gross}</span>  </div>
        <div></div>
        <div>Total Deduction<span className="font-black ml-4 text-xl text-rose-600">{deduction}</span></div>
        <div></div>
      </div>
      <div className="bg-orange-700 justify-start text-white text-xl">Net Salary <span className="font-black ml-4 text-xxl text-lime-400		">{netSalary}</span></div>
      <div><button
            onClick={populateAmount}
          >
           Show Details
          </button></div>
    </>
  );
}

export default Salary;

{
  /* <input placeholder="abhishek" 
type='number'
 value={num1} 
onChange={(e) => setNum1(parseInt(e.target.value))}
 className='border-dotted border-2 rounded-2xl'></input> */
}
