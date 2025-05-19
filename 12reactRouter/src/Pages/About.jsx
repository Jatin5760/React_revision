import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goBack = ()=>{
    // Jaha se aye thee waha navigate kardega
    navigate(-1)
  }
  return (
    <div>
      <h1> About Us</h1>
      <button onClick={goToHome}>Go to Home</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default About;
