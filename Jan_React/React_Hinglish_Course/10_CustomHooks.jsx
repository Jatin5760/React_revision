// # 10. Custom Hooks (Reusing Logic)

// React mein components UI reuse karne ke liye hote hain. **Custom Hooks logic reuse karne ke liye hote hain.**

// Agar aap dekhein ki aap same `useEffect` ya `useState` logic multiple components mein copy-paste kar rahe hain, toh usse nikaal kar apna khud ka Hook bana lein.

// ---

// ## 🏗️ Rules
// 1. Hook ka naam `use` se shuru hona chahiye (e.g., `useFetch`, `useForm`).
// 2. Yeh ek normal JS function hai jo andar React Hooks (useEffect, useState) use kar sakta hai.

// ---

// ## 💡 Example: `useFetch` Hook
// Maan lijiye humein 5 alag components mein API call karni hai. Bajaye har jagah `fetch` likhne ke, hum ek hook banayenge.

// ### Step 1: Create the Hook

// useFetch.js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading }; // State return kar rahe hain, JSX nahi
}

export default useFetch;


// ### Step 2: Use it in Components

// ProductList.jsx

/*
import useFetch from "./useFetch";

function ProductList() {
  const { data, loading } = useFetch("https://api.example.com/products");

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}
*/

// **Fayda:**
// Ab agar User Component mein user data lana ho, toh bas `useFetch('/users')` call karein. Logic ek jagah, usage har jagah!
