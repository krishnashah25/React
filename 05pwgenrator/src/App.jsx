import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbrallowed, setnumberallowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("")
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  const passwordgen = useCallback(()=>{
    if (numbrallowed) str = "1234567890"
    if (charAllowed)  str = "!@#$%^&*()+{}?><~_"

    for (i=1 ; i <=array.length; i++ ) {
      const char =Math.floor(Math.random() * str.length + 1)
      pass = str.chatAt(char)
    }

    setpassword(pass)

  }, [length,numbrallowed,charAllowed,setpassword])


  return (
    <>
    <h1>Password Genrator</h1>
    <div className='w-full max-w-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' ></div>
    </>
  )
}

export default App
