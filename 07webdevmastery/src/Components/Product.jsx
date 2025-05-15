import React from 'react'

// Yaha props ke jagah hamne destructure kar diya object ko phele parameter mai props diya tha
const Product = ({title, brand, price, ram, rom, camera}) => {
    // const obj = {
    //     title: "Galaxy S24 Ultra",
    //     brand: "Samsung",
    //     price: 150000
    // }


  return (
    <div>
      {/* Again and again we can't use props so we will destructure the object */}
      {/* <h2> Mobile Name: {props.title}</h2> */}

      <h2> Mobile Name: {title}</h2>
      <h2> Brand Name:{brand}</h2>
      <h2> Price: {price}</h2>
      <h2> Ram: {ram}</h2>
      <h2> Rom: {rom}</h2>
      <h2> Camera: {camera}</h2>
  
      <br/>
    </div>
  )
}

export default Product
