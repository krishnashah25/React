import React from 'react'
import Card from "./Component/Card"

const App = () => {

  const users = [
    {
      "name": "Aarav Sharma",
      "profession": "Software Developer",
      "age": 24,
      "city": "Delhi",
      "image": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "name": "Riya Verma",
      "profession": "UI/UX Designer",
      "age": 22,
      "city": "Mumbai",
      "image": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "name": "Kabir Singh",
      "profession": "Content Creator",
      "age": 25,
      "city": "Chandigarh",
      "image": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      "name": "Ananya Gupta",
      "profession": "Digital Marketer",
      "age": 23,
      "city": "Bangalore",
      "image": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      "name": "Rohan Mehta",
      "profession": "Photographer",
      "age": 26,
      "city": "Jaipur",
      "image": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      "name": "Sneha Kapoor",
      "profession": "Fashion Designer",
      "age": 24,
      "city": "Pune",
      "image": "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ]

  return (
    <div>
      {users.map(function(data){
        return <Card image={data.image} username={data.name} pro={data.profession} age={data.age} city={data.city} />
      })}
    </div>
  )
}

export default App