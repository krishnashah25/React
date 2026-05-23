// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from 'react'
import './App.css'

function App() {

const [colour, setcolour] = useState('black')
  return (
    <div style={{ backgroundColor: colour, height: "100vh", width: "100%" }}>
      <h1>BACKGROUND CHANGER</h1>
      <div className="bar">
        <div >
          <button onClick={ ()=> {setcolour('white')}}>White</button>
        </div>
        <div >
          <button onClick={ ()=> {setcolour('black')}}>black</button>
        </div>
        <div >
          <button onClick={ ()=> {setcolour('yellow')}} >Yellow</button>
        </div>
        <div >
          <button onClick={ ()=> {setcolour('blue')}} >blue</button>
        </div>
        <div >
          <button onClick={ ()=> {setcolour('Green')}} >Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
