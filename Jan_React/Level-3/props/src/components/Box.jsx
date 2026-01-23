import React from 'react'
function Box(props) {
    console.log(props);
    
  return (
    <div className='box'>
        <h1>Jatin Sharma</h1>
        <h2>{props.name}</h2>
    </div>
  )
}

export default Box