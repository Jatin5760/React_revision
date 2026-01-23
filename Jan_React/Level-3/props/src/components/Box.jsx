import React from 'react'
function Box({name= "Jatin Sharma", profession = "WebDev"}) {
    
  return (
    <div className='box'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
    </div>
  )
}

export default Box