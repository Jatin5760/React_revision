import React from "react";
import "./Forms.css";
import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form is submitted: " +"\n" +name+ "\n" +email+"\n"+password)

    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name :{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <h4>{name}</h4>

        <br />

        <div>
          Email :{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <h4>{email}</h4>

        <br />

        <div>
          Password :{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <h4>{password}</h4>

        <br />

        <div>
          <button onClick={() => {}}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
