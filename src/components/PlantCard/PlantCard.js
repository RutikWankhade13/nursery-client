import React from 'react'
import "./PlantCard.css"

function PlantCard({ _id, name, category, price, discription, image }) {
  return (
    <div className='plant-card'>
      <h1 className='plant-title'>{name}</h1>
      <p className='plant-price'>Price: {price}</p>
    </div>
  )
}

export default PlantCard