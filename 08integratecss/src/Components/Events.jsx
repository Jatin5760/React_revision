import React from "react";
import "./Events.css";

const Events = () => {
  const handleClick = () => {
    alert("Button is Clicked");
  };

  // Jab function parameter leta hai toh usko call back mai call karna hota hai
  const additon = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <h1> We are learning events</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onMouseOver={handleClick}>Hover Me</button>

      {/* Yaha callback function use kara hamne because function parameterized tha */}

      <button onClick={() => additon(100)}>Calculate Me</button>
    </div>
  );
};

export default Events;
