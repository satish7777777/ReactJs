import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div>
      <h1>Google SignIn</h1>
      <div>
        <button
          className="px-4 py-2 border flex gap-2 bg-blue-950 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 text-white hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
          onClick={() => handleLogin()}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg"  alt="google logo" />
          <span>Login with Google 🚀</span>
        </button>
      </div>
      </div>
   
  )
}

export default App
