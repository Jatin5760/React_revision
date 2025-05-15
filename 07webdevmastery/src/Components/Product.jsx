import React from 'react'

const Product = (props) => {
    // const obj = {
    //     title: "Galaxy S24 Ultra",
    //     brand: "Samsung",
    //     price: 150000
    // }


  return (
    <div>
      <h2> Mobile Name: {props.title}</h2>
      <h2> Brand Name:{props.brand}</h2>
      <h2> Price: {props.price}</h2>
      <br/>
    </div>
  )
}

export default Product
