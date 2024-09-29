import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EnterData from './components/EnterData'
import DisplayData from './components/DisplayData'
import Form from './components/Form'

function App() {
  const [data, setData] = useState(0)

  return (
    <>
    <div>
      <h1>Add New</h1>
      <Form />
      {/* <EnterData sendInput={setData}/>
      <div style={{backgroundColor:'red'}}>
      <DisplayData data={data}/>
      </div> */}

      </div>
    </>
  )
}

export default App
