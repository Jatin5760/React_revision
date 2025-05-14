import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Jo App.jsx hai uske andar ek method hi hai toh yaha likh sakte hai

// function MyApp(){
//     return (
//         <div>
//             <h1>
//                 Custom App!
//             </h1>
//         </div>
//     )
// }

// Jo MyApp mai ham likhte hai wo at the end of the day niche jaise object mai parse hojata hai
// Agar reactElement ko direct hi render kardenge toh run hona chaiye, but lets see





/*
const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
*/





// const anotherElement = (
//     <a href='https://google.com' target='_blank'>Visit Google</a>
// )





// Jab sara tree ban jata hai uske baad varaible injection hota hai, aur ye sidha ke sidha object ke andar inject ho jata hai.
const anotherUser = "Jayant"


// Ye jo react.createElement hai ye transpiler inject karta hai internally React mai.
const ReactElement3 = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit Google',
    // Yaha par variable ayese directly inject ho jata hai, aur yaha ham koi if else, ya loop nhi daal sakte kyonki syntactically valid nahi hai.
    anotherUser
)



// Can't use if else expression inside the object

// {
//     if()
// }







createRoot(document.getElementById('root')).render(
    //<App />

    // Ye jo MyApp hai wo bas ek function hai aur transpiled hogya hai bas
    // Ye function ki trah bhi execute ho sakta hai, But karnege nahi kyonki React notation ke hisaab se <MyApp /> wala sahi hai.

    // Myapp()
    //<MyApp/>


    // Object thodi ayese execute hoga, function hona jaruri hai
    //<ReactElement /> 

    // Ye isley nahi chal raha hai because may be iska render function jo likha ho uske methods ya methods ki properties ka name alag ho..
    //ReactElement


    // Yaha par ye code chal gya kyonki hamne function likha tha jo ki react ne internaly convert karldiya isko tree mai ek object ki tarah.
    //anotherElement


    // Ye isley run hua because hamne react ke according hi element ko likha hai
    ReactElement3


    //<App />

)
