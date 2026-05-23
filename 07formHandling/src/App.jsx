import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [value, setvalue] = useState({
    Name: '',
    Gmail: '',
    Age: '',
    Number: '',
    Dob: '',
    Gender: '',
    Subject: '',
    Resume: '',
    Url: '',
    About: ''
  })

  const handlechange =  (e)=> {
    setvalue({...value, [e.target.name]:[e.target.value]})
  }
  const handlesubmit = (e)=> {
    e.preventDefault()
    console.log(value)
  }

  return (
    <>
    <div className="container">
      <h1>Form Handling</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor='Name'>Name</label>
          <input type='text' name='Name' placeholder='Enter your name' 
          onChange={(e)=> {handlechange(e)}} required/>
  
          <label htmlFor='Gmail' >Gmail</label>
          <input type='email' name='Gmail' placeholder='Enter your Email' 
          onChange={(e)=> {handlechange(e)}} required />
  
          <label htmlFor='Age' >Age</label>
          <input type="number" name='Age' placeholder='Enter your Age' 
          onChange={(e)=> {handlechange(e)}} required/>

          <label htmlFor='Number'>Number</label>
          <input type="number" name='Number' placeholder='Enter phn number' 
          onChange={(e)=> {handlechange(e)}} required/>
  
          <lable htmlFor='Dob' >D.O.B</lable>
          <input type="date" placeholder='Date of birth' name='Dob'
          onChange={(e)=> {handlechange(e)}} required />

          <label htmlFor='Gender' >Gender</label>
          <input type="radio" name="Gender" onChange={(e)=> {handlechange(e)}} required/> Male
          <input type='radio' name='Gender' onChange={(e)=> {handlechange(e)}} required/> Female 
          <input type="radio" name="Gender" onChange={(e)=> {handlechange(e)}} required/> Other

          <label htmlFor='Subjct' >Subject</label>
          <select name='subject' id='subject'onChange={(e)=> {handlechange(e)}} required>
            <option value="math" onChange={(e)=> {handlechange(e)}}>Math</option>
            <option value="physics" onChange={(e)=> {handlechange(e)}}>Physics</option>
            <option value="chmistry" onChange={(e)=> {handlechange(e)}}>Chemistry</option>
          </select>

          <label htmlFor='Resmue'>Resume</label>
          <input type='file' placeholder='Select resume' name='resme'
          onChange={(e)=> {handlechange(e)}} required />

          <label htmlFor='Url'>URL</label>
          <input type='text' name='url' placeholder='Enter image url' 
          onChange={(e)=> {handlechange(e)}} required/>

          <lable htmlFor='About'>Anout</lable>
          <textarea name='about' id='about' cols={30} rows={10} placeholder='Enter description' 
          onChange={(e)=> {handlechange(e)}} required></textarea>

          <button type='button'>Reset</button>
          <button type='submit'>Submit</button>

        </form>
    </div>
    </>
  )
}

export default App
