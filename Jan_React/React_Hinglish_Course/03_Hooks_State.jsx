// # 03. State Management (useState Hook)

// React ka sabse powerful feature: **State**. Bina state ke React sirf static HTML dikhane jaisa hai.

// ---

// ## ⚡ 1. State vs Props
// Dono data hold karte hain, par farak kya hai?
// *   **Props:** "Arguments passed to function". Parent se milte hain. Component unhe change nahi kar sakta (**Immutable**).
// *   **State:** "Component ki memory". Component khud banata hai aur change kar sakta hai (**Mutable**). Jab state badalti hai, React component ko re-render (update) karta hai.

// ---

// ## 🎣 2. useState Syntax
// Yeh Hook humein functional component mein variable banane deta hai jo UI update trigger kare.

import { useState } from 'react';

const Counter = () => {
    // [currentValue, functionToUpdateValue] = useState(initialValue)
    const [count, setCount] = useState(0); 

    return (
        <div>
            <h1>Value: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

// *Note:* Hum directly `count = count + 1` nahi kar sakte. React ko pata nahi chalega ki value badal gayi. `setCount` React ko signal deta hai: *"Value update karo aur screen refresh karo!"*

// ---

// ## 🚀 3. useState Deep Dive (Professional Concepts)

// ### A. State Updates are Asynchronous (Batching)
// Agar aap `setCount` ke turant baad `console.log(count)` karenge, toh purani value dikhegi. React performance ke liye updates ko "batch" karta hai.

/*
const increase = () => {
    setCount(count + 1);
    console.log(count); // Still 0! (Not 1 yet)
};
*/

// ### B. Updating based on Previous State (Bahut Zaroori)
// Agar aapko purani value pe depend hokar nayi value set karni hai (jaise counter), toh hamesha **callback form** use karein.

// **Wrong Way (Risk of bugs):**
/*
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// Result: React batches them, final value becomes 1, not 3.
*/

// **Right Way (Functional Update):**
/*
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
// Result: 3. Har function ko updated 'prevCount' milta hai.
*/

// ### C. Objects/Arrays in State (Immutability is Key)
// React mein aap object ya array ko directly mutate (modfiy) nahi kar sakte. Copy banana padta hai.

// State: `const [user, setUser] = useState({ name: "A", age: 20 })`

// **Wrong way:**
// `user.name = "B"; setUser(user);` (Reference same hai, React re-render nahi karega).

// **Right way (Spread Operator):**
/*
setUser(prevUser => ({ 
    ...prevUser,  // Purani properties (age) copy karo
    name: "B"     // Sirf name overwrite karo
}));
*/

// Same for Arrays: `array.push()` kaam nahi karega.
// `setList([...oldList, newItem])` use karein.

// ---
// **Rule of Thumb:** Kabhi bhi state ko directly touch mat karo. Hamesha setter function (`setVal`) use karo, aur agar data complex hai (object/array) toh Spread Operator (`...`) use karo.
