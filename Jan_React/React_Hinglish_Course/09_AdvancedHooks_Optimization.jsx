// # 09. Advanced Hooks & Optimization

// Jab App badi ho jati hai, performance issues aane lagte hain. React ke advanced hooks humein unnecessary re-renders rokhne aur complex logic handle karne mein madad karte hain.

// ---

// ## 🔗 1. useRef (Reference Hook)
// `useRef` ke do main kaam hain:

// ### A. DOM Access (HTML Element pakadna)
// Agar aapko kisi input ko focus karna hai ya media player control karna hai.
/*
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus(); // Direct DOM manipulation
};

<input ref={inputRef} />
*/


// ### B. Storing Value WITHOUT Re-render
// `useState` jab update hota hai, component re-render hota hai. `useRef` re-render **nahi** karta.
// Yeh "Silent Variable" ki tarah hai.
/*
const count = useRef(0);

const handleScroll = () => {
    count.current = count.current + 1;
    console.log(count.current); // Console mein badhega, UI pe nahi dikhega
};
*/

// ---

// ## ⚡ 2. Optimization (Memoization)
// React by default parent render hone par **saare children** ko re-render karta hai, chahe unka data change na hua ho.

// ### A. React.memo (Component level)
// Children components ko wrap karein taaki wo tabhi render hon jab unke **Props** change hon.
/*
const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return <h1>{name}</h1>;
});
*/

// ### B. useMemo (Calculation level)
// Agar koi calculation bhari hai (e.g., filtering a huge array), toh har render pe usse dobara run karne se bachata hai.
/*
// Sirf tab calculate karega jab 'users' ya 'filter' change honge
const filteredUsers = useMemo(() => {
    return users.filter(user => user.active);
}, [users, filter]);
*/


// ### C. useCallback (Function level)
// Yeh sabse tricky hai.
// JavaScript mein har render par **Function rebuild hota hai**.
// Agar aap parent se child mein function pass kar rahe hain, toh child ko lagega ki "Naya prop aaya hai" aur wo re-render ho jayega (Even with `React.memo`).

// `useCallback` function definition ko freeze kar deta hai.
/*
// Parent
const handleClick = useCallback(() => {
    console.log("Clicked");
}, []); // Empty dependency = Function kabhi change nahi hoga

// Child
<ChildButton onClick={handleClick} />
*/

// ---

// **Simple Rule:**
// 1. `React.memo` Child component par lagayein.
// 2. Agar Child mein function pass karna hai, toh Parent mein `useCallback` use karein.
// 3. Agar Child mein heavy calculation hai, toh `useMemo` use karein.
