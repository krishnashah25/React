import React from 'react'
import './Card.css'
const Card = (props) => {
  console.log(props)
  return (
    <>
      <div className="card">
        <img src={props.image} alt={props.username} />
        <h1>{props.username}</h1>
        <h3>{props.pro}</h3>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
      </div>
    </>
  )
}

export default Card