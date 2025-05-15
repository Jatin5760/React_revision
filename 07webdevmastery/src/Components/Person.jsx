import React from 'react'

const Person = () => {

    const name = "Jatin Sharma"
    const age = 21

    const person = {
        name:'Jatin',
        age:21,
        gmail:"jatin@gmail.com",
        pincode:466445
    }

    const product = {
        title:"iphone",
        model:"iphone-15",
        price:"65000"
    }

  return (
    <>
      <div>
        {/* <h1>Hello, this is my react app</h1>
        <h2>{name}</h2>
        <p>age = {age}</p>
        <h3>We are learning react</h3>
        <h1>2+4</h1>
        <h1>{2*4}</h1> */}
        <h1>Name = {person.name}</h1>
        <h1>Age = {person.age}</h1>
        <h1>Gmail = {person.gmail}</h1>
        <h1>Pincode = {person.pincode}</h1>
    </div>

    <div>
        <h1>Title = {product.title}</h1>
        <h1>Model = {product.model}</h1>
        <h1>Price = {product.price}</h1>
    </div>
    </>
  )
}

export default Person
