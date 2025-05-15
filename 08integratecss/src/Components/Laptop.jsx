import React from "react";
import "./laptop.css";

const Laptop = ({ name, model, price }) => {
  // Isme suggestion nahi milta hai
  const obj = {
    backgroundColor: "blue",
    color: "white",
    margin: "20px",
    borderRadius: "10px",
    padding: "10px",
    border: "2px solid white",
  };

  return (
    <>
      <div
        // Inline styling
        // style={{
        //   backgroundColor: "yellow",
        //   color: "black",
        //   margin: "20px",
        //   borderRadius: "10px",
        //   padding: "10px",
        //   border: "2px solid white",
        // }}

        // Internal CSS
        style = {obj}

        // External Css
        //className="extcss"
      >
        <h3>Brand Name: {name}</h3>
        <h3>Model Name: {model}</h3>
        <h3>Price: {price}</h3>

        <br />
      </div>
    </>
  );
};

export default Laptop;
