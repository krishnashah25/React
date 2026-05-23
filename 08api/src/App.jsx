import { useState } from 'react'
import axios from 'axios'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const getData = async () => {
    const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    setdata(res.data)
  }

  return (
      <>
      <div className='header'>
        <h1>Hello World</h1>
        <button onClick={getData}>Data</button>
      </div>
      <div className='container'>
        {/* <h1>Hello World</h1>
        <button onClick={getData}>Data</button> */}
        <div className='Data'>
         {data.map((elem) => {
          return <div className='card'>
            <img src={elem.download_url} alt="photos" />
            <h2>{elem.author}</h2>
          </div>
         })}
        </div>
      </div>
    </>
  )
}

export default App
