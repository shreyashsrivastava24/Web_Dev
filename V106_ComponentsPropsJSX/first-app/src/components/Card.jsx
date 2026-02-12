import React from 'react'
import "./Card.css"

//props as an object
const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.backgroundColor || "beige" ,overflow:"hidden"}}>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" width={153} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
