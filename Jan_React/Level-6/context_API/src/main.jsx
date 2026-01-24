import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import Story from './context/story.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Story>
    <UserContext>
    {/* Now here app is a children of user context */}
      <App />  
    </UserContext>
    </Story>
  </StrictMode>,
)
