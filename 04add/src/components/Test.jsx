import React, { useEffect, useState } from 'react'
import Display from './PlusMinus/Display'
import EventsButton from './PlusMinus/eventsButton'
function Test( ) {
  const [count, setCount] = useState(0)
  const [data,SetData] = useState([])

  // const deleteData =() =>{
  //   console.log("++++++");
  //   SetData([]);
  // }


  const add = ()=>{
    console.log("AAdd")
    setCount(count+1)

  }
  const sub = ()=>{
    console.log("Subtract")
    setCount(count-1)
  }
  useEffect(()=>{
    console.log("data",data)

  },[data])
  return (
    <div>
        <h1></h1>
        {/* <button onClick={clickMe}>Default Button</button>  */}
        {/* <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={add}>+</button>

        <button onClick={sub}>-</button> */}

        <input type='text'></input>
    

      <EventsButton add={add} sub={sub}/> 
    
       <Display data={count}/>
       {/* <Enter setformData={SetData}/>*/}
      {/* <DisplayData data={data} deleteData={deleteData}/>  */}
     </div>
  )
}

export default Test