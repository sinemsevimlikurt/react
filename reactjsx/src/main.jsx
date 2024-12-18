import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    
   <div className ="app">
    <h1>TIC TAC TOE</h1>
    <App />
   </div>
)
