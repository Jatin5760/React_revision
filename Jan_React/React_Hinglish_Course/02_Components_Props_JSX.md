# 02. JSX, Components & Props

React ka "Building Block" component hai. Chaliye dekhte hain yeh kaise banta hai.

---

## 🎭 1. Components (Types)
React mein component bas ek function hai jo UI return karta hai.

### A. Functional Components (Modern & Standard)
Simple JavaScript function. Hooks sirf isi mein chalte hain.

```jsx
// Best Practice: Arrow Function aur File ka naam Capital se (e.g., Header.jsx)
const Header = () => {
    return <h1>Mera Website Header</h1>;
};

export default Header;
```

### B. Class Components (Outdated/Old)
Yeh purane codebases mein dikh sakta hai. Isme `render()` method hota tha aur `this` keyword ka problem hota tha.

```jsx
// Avoid using strict in new projects
class Header extends React.Component {
    render() {
        return <h1>Old Style Header</h1>;
    }
}
```

---

## 💻 2. JSX (JavaScript XML)
Aapko lagega aap HTML likh rahe hain, par yeh JSX hai. React isse compile karke `React.createElement()` mein badalta hai.

### JSX ke **Strict Rules**:
1.  **Single Parent:** Aap multiple elements return nahi kar sakte bina wrapper ke.
    - ❌ Wrong:
      ```jsx
      return (
          <h1>Heading</h1>
          <p>Para</p>
      )
      ```
    - ✅ Right (Fragments use karein):
      ```jsx
      return (
          <>
             <h1>Heading</h1>
             <p>Para</p>
          </>
      )
      ```

2.  **Closing Tags:** Har tag close hona chahiye. `<hr>` nahi, `<hr />` likhna padega. `<input />`, `<img />`.

3.  **CamelCase:** JavaScript variable rules apply hote hain attributes pe.
    - `class` -> `className` (Kyunki class JS ka reserved keyword hai).
    - `for` -> `htmlFor`.
    - `onclick` -> `onClick`.
    - `style`: Object pass karna padta hai. `style={{ color: "red", backgroundColor: "black" }}`.

4.  **JS inside HTML:** Curly braces `{}` ka use karein.
    ```jsx
    const name = "Rahul";
    return <h1>Hello {name}</h1>; // Hello Rahul
    ```

---

## 📦 3. Props (Properties)
Components ko reusable banane ke liye hum **Props** pass karte hain. Yeh function arguments jaisa hai.

### Basic Data Passing
**Parent Component:**
```jsx
const App = () => {
    return (
       <>
          <Card title="React" price={500} />
          <Card title="NodeJS" price={800} />
       </>
    );
};
```

**Child Component (Card.jsx):**
```jsx
// Props object milta hai argument mein
const Card = (props) => {
    return (
        <div className="card">
            <h2>Course: {props.title}</h2>
            <p>Price: {props.price}</p>
        </div>
    );
};
```

### Destructuring Props (Professional Way)
Bar bar `props.something` likhna boring hai. Direct object destructure karein.

```jsx
const Card = ({ title, price }) => {
    return (
        <div>
           <h2>{title}</h2>
           <p>₹{price}</p>
        </div>
    );
};
```

### Default Props
Agar parent ne value nahi bheji toh kya hoga?
```jsx
const Button = ({ text = "Click Me" }) => { 
    return <button>{text}</button>; 
};
// Agar <Button /> call kiya toh text "Click Me" hoga automatically.
```

### Children Prop
Agar component ke tags ke beech mein content bhejna ho, toh woh `children` name ke prop mein milta hai.

```jsx
const Container = ({ children }) => {
    return <div className="border-box">{children}</div>;
}

// Usage:
<Container>
    <h1>Yeh andar ka content hai</h1>
    <p>Jo children prop mein catch hoga</p>
</Container>
```

---
**Summary:** Component ek factory hai, aur Props uska raw material hai. Factory (Component) material (Props) lekar product (UI) banata hai.
