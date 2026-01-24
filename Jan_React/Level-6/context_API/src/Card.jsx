import React from 'react'
import { HindiKahani } from './context/story'
import { useContext } from 'react'

function Card() {
    let s = useContext(HindiKahani)
    console.log(s);
    
  return (
    <div>
        <h1>Card</h1>
        <h2>{s.name}</h2>
        <h3>{s.storyline}</h3>
    </div>
  )
}

export default Card