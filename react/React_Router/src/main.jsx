import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/*  browserrouter we need to give link for browserrouter, it  will route wht ever the components we give it to the app.js  */}
  <StrictMode>
    <App />
  </StrictMode>
   </BrowserRouter>,
)  
