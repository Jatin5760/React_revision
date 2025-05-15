import React from 'react'

const Person3 = ({name, age, position}) => {

    // if(age > 80){
    //     console.log("No you are not PM");
    // }
    // else{
    //     console.log("Yes you are PM");
    // }

    // Ternary Operator ()?():()
    (age>80) ? (console.log("No you are not PM")) : console.log("Yes you are PM")


  return (
    <>
      <div>
        <h1>
            Name: {name}
        </h1>

        <h3>
            {age>80 ? <h1>No you are not PM</h1> : <h1>Yes you are PM</h1>}
        </h3>
      </div>
    </>
  )
}

export default Person3
