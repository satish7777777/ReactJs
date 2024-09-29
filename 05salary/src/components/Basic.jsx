import React from 'react'


function Basic({setBasic}) {
  return (
    <div>Basic
        <input
            type="number"
            placeholder="Basic Salary" onChange={(e) =>setBasic(parseInt(e.target.value))}></input>
    </div>
  )
}

export default Basic