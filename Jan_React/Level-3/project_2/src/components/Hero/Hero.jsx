import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'

function Hero() {
  return (
    <div className='hero'>
      <Card name = "BMW" price = "Rs 1.9CR" imageurl = "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name = "AUDI" price = "Rs 1.3CR" imageurl = "https://images.unsplash.com/photo-1610880846497-7257b23f6138?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXVkaXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card name = "MG" price = "Rs 90L" imageurl = "https://motoringworld.in/wp-content/uploads/2021/01/2021-MG-Hector.jpg"/>
    </div>
  )
}

export default Hero