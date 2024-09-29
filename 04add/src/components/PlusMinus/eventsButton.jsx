import React from 'react'

export default function EventsButton({add,sub}) {
    
  return (
    <div>
    <h1>Events Buttons</h1>
    {/* <button onClick={clickMe}>Default Button</button> */}
    {/* <button onClick={handleClick}>Click me</button> */}
    <button className='bg-lime-500 ml-4' onClick={add}>+</button>

    <button className='bg-red-400' onClick={sub}>-</button>

    <input type='text'></input>
</div>
  )
}
