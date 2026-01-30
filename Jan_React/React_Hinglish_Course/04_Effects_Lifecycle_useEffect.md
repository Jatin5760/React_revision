# 04. Effects & Lifecycle (useEffect Hook)

Functional Components mein lifecycle (Mount, Update, Unmount) ko handle karne ke liye `useEffect` use hota hai. Iska naam "Effect" isliye hai kyunki yeh **Side Effects** handle karta hai.

**Side Effects kya hain?**
Wo kaam jo UI render hone ke alawa hote hain:
- API Data Fetching.
- DOM direct manipulation (`document.title` change karna).
- Timers (`setInterval`).
- Event Listeners lagana.

---

## ⚙️ 1. useEffect Syntax
```jsx
useEffect(() => {
    // Logic yahan likhein (Effect)
    
    return () => {
        // Cleanup yahan likhein (Optional)
    };
}, [dependencyArray]); // Dependency Array (Control karta hai kab chalna hai)
```

---

## 🚦 2. Dependency Array Variations (Kab Chalta Hai?)

### Case A: No Array (Dangerous)
Agar aap array pass nahi karte, toh effect **Har Render** pe chalega. Yeh app ko slow kar sakta hai ya infinite loop bana sakta hai.
```jsx
useEffect(() => {
    console.log("I run on every single render!");
});
```

### Case B: Empty Array `[]` (On Mount)
Agar khali array pass karein, toh effect **Sigrf ek baar** chalega jab component screen pe aata hai (Like `componentDidMount`).
```jsx
useEffect(() => {
    console.log("I run ONLY once when component loads.");
    // Best place for API Calls
}, []);
```

### Case C: With Dependencies `[prop, state]` (On Update)
Jab bhi array ke andar wala variable change hoga, effect dobara chalega.
```jsx
useEffect(() => {
    console.log("Count changed, so I am running again.");
}, [count]); // Sirf jab 'count' badlega tab chalega
```

---

## 🧹 3. Cleanup Function (The Return Statement)
Bahut important concept. Jab component screen se hat-ta hai (Unmount) ya effect dobara chalne wala hota hai, tab cleanup function chalta hai.

**Use Cases:**
- `setInterval` ko clear karna.
- Event Listeners hatana (`removeEventListener`).
- HTTP request cancel karna.

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Tick Tock...");
    }, 1000);

    // Agar yeh nahi likhenge, toh component hatne ke baad bhi timer chalta rahega memory mein!
    return () => {
        clearInterval(timer);
        console.log("Cleanup done!");
    };
}, []);
```

---

## ⚠️ 4. React Strict Mode & Double Invocation
Development mode mein, React intentionally `useEffect` ko **do baar** chalata hai.
Order: `Mount -> Unmount -> Mount`.
Yeh verify karne ke liye hota hai ki aapne Cleanup function sahi se likha hai ya nahi. Production build mein yeh ek hi baar chalta hai. So panic mat hona agar console mein do baar log dikhe!

---
**Summary:**
- `useState`: Rendering ke waqt data handle karta hai.
- `useEffect`: Rendering ke *baad* side work handle karta hai (API, Timers).
