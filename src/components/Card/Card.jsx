import "./Card.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function Card(
    {
        title="Titulo por defecto",
        description="Descripcion por defecto"
    }) {
        
  return (
    <div className='Card'>
        <Link to={title}> <h2>{title}</h2> </Link>
        <p>{description}</p>
    </div>
  )
}


