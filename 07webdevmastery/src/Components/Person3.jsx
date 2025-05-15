import React from 'react'

const Person3 = ({name, age, position, citizen}) => {

    // if(age > 80){
    //     console.log("No you are not PM");
    // }
    // else{
    //     console.log("Yes you are PM");
    // }

    // Ternary Operator ()?():()
    // (age>80) ? (console.log("No you are not PM")) : console.log("Yes you are PM")

    // Boolean operator


  return (
    <>
      <div>
        <h1>
            Name: {name}
        </h1>
        <h3>
            {age>80 ? <h3>No you are not PM</h3> : <h3>Yes you are PM</h3>}
        </h3>
        <h3> 
            {citizen == true ? <h3>Yes eligible</h3> : <h3>Not eligible</h3>}
        </h3>
        <h3>
            {citizen && <p>You are eligible for PM</p>}
        </h3>

        <br/>
      </div>
    </>
  )
}

export default Person3
