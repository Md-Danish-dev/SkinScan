import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from './components/Blog/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Blog />
  </StrictMode>,
)
