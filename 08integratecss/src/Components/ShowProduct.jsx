import React from 'react'

// Array ke andar object hai toh hamesha map use karo
const ShowProduct = () => {
    let products = [
        {id:1, title:'iphone - 13', price: 150000},
        {id:2, title:'iphone - 14', price: 250000},
        {id:3, title:'iphone - 15', price: 350000},
        {id:4, title:'iphone - 16', price: 450000}
    ]
  return (
    <div>
      {products.map((data)=> (
        <div> key = {data.id}
            <h1>Title = {data.title}</h1>
            <h2>Price = {data.price}</h2>
        </div>
        ))}
    </div>
  )
}

export default ShowProduct
