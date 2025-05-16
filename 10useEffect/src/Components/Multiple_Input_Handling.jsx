import React from "react";
import "./Multiple_Input.css";
import { useState } from "react";

const Multiple_Input_Handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    phone: "",
    age: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    // Phele jo bhi data tha usko as it is rehene do a
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e)=>{
    e.preventDefault();
    alert('Form Submitted')

    console.log(formData);

    setFormData({
        name: "",
        email: "",
        pass: "",
        phone: "",
        age: "",
      })
    
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3 style={{ color: "lightgreen" }}>Multiple Form Handling</h3>
        <div>
          Name: <input value={formData.name} 
          onChange={onChangeHandler} name="name" type="text" />
        </div>
        <div>
          Email: <input value={formData.email} 
          onChange={onChangeHandler} name="email" type="email" />
        </div>
        <div>
          Pass: <input value={formData.pass} 
          onChange={onChangeHandler} name="pass" type="password" />
        </div>
        <div>
          Phone: <input value={formData.phone} 
          onChange={onChangeHandler} name="phone" type="number" />
        </div>
        <div>
          Age: <input value={formData.age} 
          onChange={onChangeHandler} name="age" type="number" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
n};

export default Multiple_Input_Handling;
