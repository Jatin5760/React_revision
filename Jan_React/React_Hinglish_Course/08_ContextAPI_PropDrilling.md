# 08. Context API (Avoiding Prop Drilling)

React mein data flow "Top to Bottom" (Parent to Child) hota hai.

## 穴 1. The Problem: Prop Drilling
Agar `App` component ke paas user ka data hai, aur `ProfileCard` (jo 4 level niche hai) ko wo data chahiye, toh humein har beech wale component ke through props pass karne padenge.

`App -> Layout -> Navbar -> UserMenu -> ProfileCard`

Beech wale components (Layout, Navbar) ko data ki zarurat nahi hai, par unhe sirf transport (postman) banna padta hai. Ise **Prop Drilling** kehte hain.

---

## 🌐 2. The Solution: Context API
Context API ek "Global Storage" create karta hai jahan se koi bhi component directly data le sakta hai, bina parent se maange.

**Analogy:**
- **Props:** USB drive ko haath se pass karna.
- **Context:** Google Drive (Cloud) se directly download karna.

---

## 🛠️ 3. Implementation Steps

### Step 1: Create Context
Ek alag file banayein (e.g., `UserContext.js`).
```jsx
// UserContext.js
import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;
```

### Step 2: Provide Context (Sender)
Main file mein Provider lagayein aur data pass karein.
```jsx
// App.jsx
import UserContext from './UserContext';

function App() {
  const user = { name: "Jatin", role: "Admin" };

  return (
    // Jo bhi component iske andar hai, wo 'user' ko access kar payega
    <UserContext.Provider value={user}>
      <Layout /> 
    </UserContext.Provider>
  );
}
```

### Step 3: Consume Context (Receiver)
Jo component data chahta hai wahan `useContext` hook use karein.
```jsx
// ProfileCard.jsx (Deeply nested)
import { useContext } from 'react';
import UserContext from './UserContext';

function ProfileCard() {
  const data = useContext(UserContext); // Direct Data! No Props needed.

  return <h1>Hello, {data.name}!</h1>;
}
```

---

## ⚠️ Limitations
Context API small/medium apps ya "Theme/Language" switching ke liye best hai.
Agar data bahut tez change ho raha hai (high frequency updates), toh **Redux** ya **Zustand** behtar options hain performance ke liye.
