# 01. React Basics & Virtual DOM (Introduction)

## 🌟 1. React Kya Hai? (What is React?)
React ek **JavaScript Library** hai jo user interfaces (frontend) banane ke liye use hoti hai. Yeh Facebook (Meta) ne banayi hai.

**Library vs Framework (React vs Angular/Vue):**
- **Library (React):** Yeh sirf "View" layer (UI) ko handle karti hai. Routing, State Management, API calls ke liye aapko extra libraries (React Router, Redux, Axios) lagani padti hain. "You chose your tools".
- **Framework (Angular):** Yeh "Batteries Included" hai. Isme routing, http client, sab kuch inbuilt aata hai.

**Kyun Use Karein?**
1.  **Component Based:** UI ko chote tukdon (components) mein tod dete hain (Header, Footer, Button).
2.  **Reusable Code:** Ek baar Button component banao, poori site pe use karo.
3.  **Fast Performance:** Virtual DOM ki wajah se.
4.  **Huge Ecosystem:** Har cheez ke liye bani-banayi libraries available hain.

---

## 🚀 2. SPA vs MPA (Single Page Application)
React **SPA (Single Page Application)** banata hai. Iska concept samjhna zaroori hai.

### MPA (Multi Page Application - Old Style)
- Jab aap `Home` se `About` page pe click karte hain, browser server se naya `HTML` page mangta hai.
- **Problem:** Poora page reload hota hai, screen blink karti hai, speed slow hoti hai.
- **Examples:** Old classic websites (PHP, JSP).

### SPA (Single Page Application - React Style)
- Browser pe sirf **Ek HTML Page** (`index.html`) load hota hai shuru mein.
- Jab aap `About` pe click karte hain, page reload **NAHI** hota.
- React sirf `<div>Home</div>` ko hata kar `<div>About</div>` laga deta hai JavaScript ke through.
- **Benefit:** App jaisa smooth feel aata hai without reloading.

---

## 💡 3. Virtual DOM (The Heart of React Implementation)
Interview ka sabse favourite question: *"React fast kyun hai?"* Answer: **Virtual DOM.**

### DOM Kya Hai? (Real DOM)
DOM (Document Object Model) aapke HTML page ka tree structure hai.
- Problem: Real DOM ko update karna "Expensive" (Bhari) hota hai.
- Agar aap list mein ek item change karte hain, toh browser poori list ko repaint kar sakta hai.

### Virtual DOM Kya Hai?
Yeh Real DOM ki ek "Lightweight Copy" hai jo React apni memory mein rakhta hai.

### Kaam Kaise Karta Hai? (Reconciliation Process)
1.  **Render:** Jab aap React mein kuch change karte hain (State change), React ek naya **Virtual DOM** tree banata hai.
2.  **Diffing:** React purane Virtual DOM aur naye Virtual DOM ko compare karta hai. ("Farak dhoondo" game).
    - Example: Pata chala sirf `<h1>` ka text change hua hai.
3.  **Commit:** React sirf uss `<h1>` ko Real DOM mein update karta hai. Baaki poora page waise ka waisa rehta hai.

**Summary:**
- Direct DOM manipulation is slow.
- React DOM manipulation (via Virtual DOM) is fast because it does generic batch updates.

---

## 🛠 4. Create React App vs Vite
Pehle hum `create-react-app` use karte thay. Aaj kal industry standard **Vite** (pronounced as 'Veet') hai kyunki yeh 10x fast hai.

```bash
# Command to create project via Vite
npm create vite@latest my-app -- --template react

# Setup
cd my-app
npm install
npm run dev
```

Ab aap ready hain Components banane ke liye! Next file mein dekhte hain **JSX aur Components**.
