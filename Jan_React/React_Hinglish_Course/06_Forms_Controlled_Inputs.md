# 06. Forms & Controlled Components

HTML mein form elements (input, textarea, select) apni state khud maintain karte hain. React mein hum chahte hain ki **React State** hi boss bane.

---

## 🎮 1. Controlled Components
Iska matlab hai input field ki value **sirf aur sirf** React State se control hogi.
- Input dikhayega wahi jo State mein hai (`value={state}`).
- Jab user type karega, hum State update karenge (`onChange`).

Ye "Two-Way Binding" jaisa lagta hai par manual control hota hai.

```jsx
import { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    // UI update karne ke liye state update zaroori hai
    setName(e.target.value); 
  };

  return (
    <input 
      type="text" 
      value={name}       // Locked by State
      onChange={handleChange} // Updates State
    />
  );
}
```
*Agar aap `onChange` hata denge, toh input field type karne par lock ho jayega kyunki state update nahi ho rahi.*

---

## 🏗️ 2. Handling Multiple Inputs (Optimized)
Agar form mein 10 fields hain, toh 10 `useState` aur 10 `handlers` banana bewaakoofi hai. Hum object state use karte hain.

```jsx
function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,          // Purane fields copy karo (Spread operator)
      [name]: value     // Jo field change hua usse override karo (Computed property name)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🛑 Page Reload Rokna zaruri hai! SPA behavior.
    console.log("Submit Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      
      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />

      <button type="submit">Register</button>
    </form>
  );
}
```

---

## 🕵️ 3. Uncontrolled Components (Bonus)
Kabhi kabhi humein React state ki zarurat nahi hoti (e.g., Sirf value read karni hai, validation nahi chahiye on every keystroke).
Iiske liye `useRef` hook use hota hai. Yeh direct DOM access leta hai (Classic HTML Style).
Isse avoid karein unless zaroorat ho (like File Inputs).
