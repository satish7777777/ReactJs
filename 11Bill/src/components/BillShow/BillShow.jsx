import React from 'react'
import { useState,useEffect } from 'react'
import { getAllCustomer } from '../../services/ApiCall'

function BillShow() {
  const [billData, setBillData] = useState([])
  useEffect(() =>{
      fetch();
  },[])

  const fetch = async () =>{
    try{
        const newData = await getAllCustomer();
        console.log("BillData", newData);
        setBillData(newData);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead className="bg-gray-200">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date:</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name:</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresss:</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Sale:</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    {billData.map((element, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{element.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{element.customerName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{element.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{element.netAmt}</td>
                        </tr>
                    ))}
      </tbody>
      </table>
  )
}

export default BillShow
