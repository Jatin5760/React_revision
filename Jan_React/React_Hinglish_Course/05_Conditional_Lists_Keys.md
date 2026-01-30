# 05. Conditional Rendering & Lists (The Map Loop)

Data ko display karna React ka main kaam hai. Yahan hum dekhenge ki **Conditions** ke base par UI kaise dikhana hai aur **Arrays** ko list mein kaise convert karna hai.

---

## 🕵️ 1. Conditional Rendering
Logic laga kar decide karna ki user ko kya dikhega (Login Button ya Logout Button?).

### Method A: Ternary Operator (Most Common)
JSX ke andar `if-else` directly nahi likh sakte, isliye hum Ternary Operator `condition ? true : false` use karte hain.

```jsx
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome Back! 👋</h1>
      ) : (
        <button>Please Login</button>
      )}
    </div>
  );
}
```

### Method B: The `&&` (Short Circuit) Operator
Jab aapko "Sirf Dikhaana hai ya Kuch Nahi Dikhaana" (Else case nahi hai).

```jsx
{unreadMessages.length > 0 && (
  <h2>You have new messages! 🔔</h2>
)}
```
*Logic:* Agar left side true hai, toh right side render hoga. Agar false hai, toh React kuch render nahi karega.

---

## 📝 2. Rendering Lists (The `.map()` method)
React mein `for` loop JSX mein nahi chalta. Hum array method `.map()` use karte hain jo naya array return karta hai.

```jsx
const fruits = ["Apple", "Mango", "Banana"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

## 🔑 3. The Importance of "Keys"
Interview Favorite Topic! 🚨
Jab aap list render karte hain, React aapse `key` prop mangta hai.

### Why Keys?
React ka "Reconciliation" algorithm `key` ko use karke identify karta hai ki **Kaunsa item change, add, ya remove hua hai**.
Bina key ke, React ko poori list dobara re-paint karni padegi agar ek item bhi change hua. Key performance bachaata hai.

### 🚫 Index as Key (Bad Practice)
Log aksar temporary `index` (0, 1, 2) use kar lete hain.
```jsx
// Avoid This if list can change order!
items.map((item, index) => <li key={index}>{item}</li>)
```
**Problem:** Agar aapne list ke beech mein kuch insert/delete kiya, toh sabke index badal jayenge. React confuse ho jayega aur galat state update kar sakta hai.

**Best Practice:** Hamesha unique ID use karein (Database ID, UUID).
```jsx
users.map((user) => <li key={user.id}>{user.name}</li>)
```
