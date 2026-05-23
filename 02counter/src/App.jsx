import { useState } from 'react'
import './App.css'

function App() { 

  let [count , setcount] = useState(0)

  if (count >= 0 && count <=20) {

    const AddValue = () => {
      setcount(count = count + 1)
    }

    const RemoveValue = () => {
      setcount(count = count -1)
    }

    return (
      <>
      <h1>krishna or React</h1>
      <h2>Counter value : {count}</h2>
      <br></br>
      <button onClick={AddValue}>Add value : {count}</button>
      <br></br>
      <button onClick={RemoveValue}>Remove value : {count}</button>
      <br></br>
      <h4>footer : {count}</h4>
      </>
    )
  } else {false}
}

export default App
