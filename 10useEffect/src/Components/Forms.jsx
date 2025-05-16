import React from "react";
import "./Forms.css";
import { useState } from "react";

const Forms = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Forms</h1>
      <form>
        <div>
          Name : <input value={name}
          onChange={(e)=> setName(e.target.value)} 
          type="text" />
        </div>

        <br />

        <div>
          Email : <input value={email} 
          onChange={(e)=> setEmail(e.target.value)} 
          type="email" />
        </div>

        <br />

        <div>
          Password : <input value={password} 
          onChange={(e)=> setPassword(e.target.value)} 
          type="password" />
        </div>

        <br />

        <div>
          <button onClick={()=>{}}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
