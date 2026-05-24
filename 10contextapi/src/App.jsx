import { useState } from 'react'
import './App.css'
import Usercontext from '../context/Usercontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Usercontext.Provider>
      <div >
        <h1>Hello World</h1>
      </div>
    </Usercontext.Provider>
    </>
  )
}

export default App
