# ⚛️ React.js Mastery Notes (Hinglish Edition)

Yeh complete React documentation hai jo aapko ek beginner se lekar professional developer banne mein madad karegi. Har concept ko Hinglish mein explain kiya gaya hai taki aap core logic ko easily samajh sakein.

---

## 📚 Table of Contents
1. [Introduction to React & Virtual DOM](#1-introduction-to-react--virtual-dom)
2. [JSX & Components](#2-jsx--components)
3. [State Management (useState)](#3-state-management-usestate)
4. [Side Effects & Lifecycle (useEffect)](#4-side-effects--lifecycle-useeffect)
5. [Conditional Rendering & Lists](#5-conditional-rendering--lists)
6. [Forms Handling](#6-forms-handling)
7. [Routing (React Router Dom)](#7-routing-react-router-dom)
8. [Context API (State Management)](#8-context-api)
9. [Advanced Hooks (useRef, useMemo, useCallback)](#9-advanced-hooks)
10. [Custom Hooks](#10-custom-hooks)
11. [Performance Optimization](#11-performance-optimization)

---

## 1. Introduction to React & Virtual DOM

### React Kya Hai?
React ek JavaScript Library hai (Framework nahi) jo user interfaces (UI) banane ke liye use hoti hai. Iska main focus **Components** par hota hai. Hum chote-chote components banate hain (jaise Button, Header, Card) aur unhe jodkar poori website banate hain.

### Single Page Application (SPA)
React **SPA** banata hai. Iska matlab hai ki jab user ek page se doosre page par jaata hai, toh browser refresh nahi hota. Sirf content change hota hai. Yeh experience mobile apps jaisa smooth hota hai.

### 💡 Virtual DOM Explained (Interview Favorite)
DOM (Document Object Model) browser ka structure hota hai. Real DOM ko update karna slow hota hai.
React kya karta hai:
1. React apna khud ka ek copy banata hai DOM ka, jise **Virtual DOM** kehte hain.
2. Jab bhi aap code mein kuch change karte hain (State change), React ek naya Virtual DOM banata hai.
3. React purane Virtual DOM aur naye Virtual DOM ko compare karta hai (is process ko **Diffing Algorithm** ya **Reconciliation** kehte hain).
4. Jo cheez change hui hai, sirf ussi specific part ko Real DOM mein update karta hai. Isse React bahut fast ho jata hai.

---

## 2. JSX & Components

### JSX (JavaScript XML)
JSX dekhne mein HTML jaisa lagta hai, par yeh actually JavaScript hai.
**Rules of JSX:**
1. Har component se sirf **ek parent element** return hona chahiye. (Solution: Fragments `<>...</>` use karein).
2. HTML tags hamesha close hone chahiye. `<img />`
3. Attributes camelCase mein hote hain: `class` ❌ -> `className` ✅, `onclick` ❌ -> `onClick` ✅.

### Components
React mein do tarah ke components hote hain, par aajkal sirf **Functional Components** use hote hain.

```jsx
// Functional Component Example
function Welcome() {
  return <h1>Hello, Developer!</h1>;
}
// Ya phir Arrow Function (Industry Standard)
const Welcome = () => {
  return <h1>Hello, Developer!</h1>;
}
```

### Props (Properties)
Props data pass karne ka tareeka hai parent component se child component tak. Props read-only hote hain (child unhe change nahi kar sakta).

```jsx
const Card = (props) => {
    // Destructuring props for cleaner code
    // const { title, description } = props;
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

// Usage
<Card title="React Notes" description="Best notes for learning." />
```

---

## 3. State Management (useState)

React mein variables change hone par UI apne aap update nahi hoti. Hamein React ko batana padta hai ki "Variable change hua hai, UI re-render karo". Iske liye hum **State** use karte hain.

### Hook: `useState`
Yeh sabse common hook hai status store karne ke liye.

```jsx
import { useState } from 'react';

const Counter = () => {
    // count: current value
    // setCount: function to update value
    const [count, setCount] = useState(0); 

    const increase = () => {
        // setCount(count + 1); // Normal update
        
        // Best Practice: Jab previous state par depend ho
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
};
```
*Professional Tip:* State asynchronous hoti hai. `setCount` call hone ke turant baad agar `console.log(count)` karoge toh purani value dikhegi.

---

## 4. Side Effects & Lifecycle (useEffect)

**Side Effects** ka matlab hai wo kaam jo component render hone ke baad hote hain. Jaise:
- API se data fetch karna.
- DOM manipulate karna.
- Timers set karna.

### Hook: `useEffect`
Yeh `componentDidMount`, `componentDidUpdate`, aur `componentWillUnmount` ka combination hai.

```jsx
import { useEffect, useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    // Syntax: useEffect(callback, dependencyArray)
    useEffect(() => {
        console.log("Component Mount hua ya Update hua");
        
        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        // CLEANUP FUNCTION (Return wala part)
        // Yeh tab chalta hai jab component unmount hota hai (screen se hat-ta hai)
        return () => {
            console.log("Cleanup: Timer stopped");
            clearInterval(intervalId);
        };
    }, []); // Empty array [] matlab sirf MOUNT par chalega (ek baar)

    return <h1>Seconds: {seconds}</h1>;
};
```

**Dependency Array Rules:**
1. **No Array:** Har render par chalega (Dangerous ❌).
2. **Empty Array `[]`:** Sirf pehli baar chalega (Mount ✅).
3. **`[count]`:** Jab bhi `count` vary karega, tab chalega (Update ✅).

---

## 5. Conditional Rendering & Lists

### Conditional Rendering
UI ka kuch hissa kisi condition ke base par dikhana.

```jsx
const UserProfile = ({ isLoggedIn }) => {
    // Tariqa 1: Ternary Operator (Best)
    return (
        <div>
            {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
        </div>
    );

    // Tariqa 2: Logical AND (Short circuit)
    // Agar condition true hai toh dikhao, warnah kuch nahi
    // { isLoggedIn && <WelcomeMessage /> }
};
```

### Lists & Keys
Arrays ko loop karke elements dikhana. `map()` function best hai.

```jsx
const fruits = ["Apple", "Mango", "Banana"];

const FruitList = () => {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                // Key prop zaroori hai taki React track kar sake kaunsa item change hua
                // Index avoid karein agar list change ho sakti hai. Unique ID use karein.
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};
```

---

## 6. Forms Handling

React mein forms do tarah se handle hote hain: Controlled aur Uncontrolled. Hum **Controlled Components** prefer karte hain (jahan input ka data React State mein hota hai).

```jsx
const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        // Dynamic key update
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,        // Spread operator to keep old fields
            [name]: value   // Update specific field
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Page reload rokne ke liye
        console.log("Form Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                placeholder="Username" 
            />
            <input 
                name="password" 
                type="password"
                value={formData.password} 
                onChange={handleChange} 
            />
            <button type="submit">Login</button>
        </form>
    );
};
```

---

## 7. Routing (React Router Dom)

Single Page Applications mein URL change hone par alag content dikhane ke liye `react-router-dom` use karte hain.

`npm install react-router-dom`

**Setup (main.jsx / index.js):**
```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
    <App />
</BrowserRouter>
```

**Usage (App.jsx):**
```jsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <nav>
                {/* <a> tag use na karein, usse page reload hota hai. Link use karein */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<UserProfile />} /> {/* Dynamic Route */}
                <Route path="*" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
        </div>
    );
};

// Programmatic Navigation
const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        // Logic...
        navigate('/dashboard'); // JS se redirect karna
    };
}
```

---

## 8. Context API

**Problem (Prop Drilling):** Agar data ko Grandparent -> Parent -> Child -> GrandChild tak bhejna ho, toh beech ke components mein faltu props pass karne padte hain.
**Solution:** Context API (Data ko teleport karna).

```jsx
import { createContext, useContext } from 'react';

// 1. Context Create karo
const ThemeContext = createContext();

// 2. Provider banao
const ThemeProvider = ({ children }) => {
    const theme = "dark";
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Jahan data chahiye wahan Use karo
const Toolbar = () => {
    const theme = useContext(ThemeContext);
    return <div>Current Theme: {theme}</div>;
}

// 4. App ko wrap karo
const App = () => (
    <ThemeProvider>
        <Toolbar />
    </ThemeProvider>
);
```

---

## 9. Advanced Hooks

### `useRef`
Do kaam karta hai:
1. DOM elements ko access karna (jaise input focus karna).
2. Mutable value store karna jo re-render trigger nahi karti.

```jsx
const InputFocus = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        // DOM direct access
        inputRef.current.focus(); 
        inputRef.current.style.border = "2px solid red";
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus</button>
        </>
    );
};
```

### `useMemo` (Performance)
Expensive calculations ko cache (memoize) karne ke liye. Jab tak dependencies change nahi hoti, result recalculate nahi hota.

```jsx
const expensiveCalculation = (num) => {
    // Heavy loop
    return num * 2; 
};

const Component = ({ number }) => {
    // Jab tak 'number' same hai, calculation dubara nahi hogi
    const savedResult = useMemo(() => expensiveCalculation(number), [number]);
    return <div>{savedResult}</div>;
};
```

### `useCallback` (Performance)
Functions ko memoize karne ke liye. React mein har render par functions dobara create hoti hain. `useCallback` usse rokta hai, useful jab functions ko props ke through Pure Components mein bheja jaye.

```jsx
const Parent = () => {
    // Yeh function memory mein same reference maintain karega jab tak dependency change na ho
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return <Child onClick={handleClick} />;
};
```

---

## 10. Custom Hooks

Apna khud ka hook banana logic reuse karne ke liye. Hamesha `use` se start hona chahiye naam.

**Example: `useFetch` Hook**
```jsx
// useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}

// Component mein usage
const Users = () => {
    const { data, loading } = useFetch('https://api.github.com/users');
    
    if (loading) return <p>Loading...</p>;
    return <div>{JSON.stringify(data)}</div>;
};
```

---

## 11. Performance Optimization Tips & Concepts

1.  **Lazy Loading (Code Splitting):**
    Website ka saara code ek baar mein load na karke, chunks mein load karna.
    ```jsx
    import React, { Suspense } from 'react';
    const AdminPanel = React.lazy(() => import('./AdminPanel'));

    <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPanel />
        </Suspense>
    </div>
    ```

2.  **React.memo:**
    High Order Component jo check karta hai ki agar props change nahi hue, toh component re-render na ho.

3.  **Strict Mode (`<React.StrictMode>`):**
    Development mein components ko do baar render karta hai taaki side-effects aur bugs pakde ja sakein. Production mein normal chalta hai.

---

### 🔥 Summary for Professionals
- **State** local data ke liye hai.
- **Props** data transfer ke liye hai.
- **Context** global Theme/User data ke liye hai.
- **Redux/Zustand** complex global state ke liye hai.
- **useEffect** side-effects (API, Subscription) ke liye hai.
- **Next.js** seekhein agar SEO aur Server Side Rendering (SSR) chahiye.

**Happy Coding! 🚀**
