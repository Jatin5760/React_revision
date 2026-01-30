// # 07. React Router DOM (Navigation in SPA)

// React khud ek single page library hai, usme navigation built-in nahi hoti. Humein third-party library `react-router-dom` chahiye hoti hai taaki hum URL change karein bina page reload kiye (SPA Magic).

// **Install:** `npm install react-router-dom`

// ---

// ## 🛣️ 1. Basic Setup
// App ko `BrowserRouter` se wrap karna padta hai.

// main.jsx

/*
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
*/

// ---

// ## 🔗 2. Defining Routes
// `Routes` container hai jo `Route` switch karta hai.

// App.jsx
/*
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <nav>
        {/* 🚨 NEVER use <a> tag in React for internal links */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}
*/


// ### 🛑 Link vs Anchor Tag (`<a>`)
// - **`<a>` Tag:** Browser ko force karta hai naya HTML page server se mangne ke liye. **Page Reload hota hai aur State Zero ho jati hai.** (MPA Behavior)
// - **`<Link>` Tag:** Sirf URL badalta hai aur DOM inject karta hai. **Page Reload nahi hota.** (SPA Behavior)

// ---

// ## 🎣 3. Important Hooks
// ### A. `useNavigate()` (Programmatic Navigation)
// Jab button click ya form submit ke baad user ko redirect karna ho.

/*
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // ...login logic...
        navigate('/dashboard'); // Redirect user
    };
};
*/


// ### B. `useParams()` (Dynamic URLs)
// Example: `/product/123`, `/profile/jatin`

// Route Definition
// <Route path="/user/:userid" element={<UserProfile />} />

// Component Logic
/*
import { useParams } from 'react-router-dom';

function UserProfile() {
    const { userid } = useParams(); 
    return <h1>Viewing Profile of ID: {userid}</h1>
}
*/


// ### C. `NavLink` (Active Styling)
// Yeh special `Link` hai jo pata laga leta hai ki wo active hai ya nahi.

/*
<NavLink 
  to="/about" 
  className={({ isActive }) => isActive ? "text-red-500" : "text-black"}
>
  About
</NavLink>
*/
