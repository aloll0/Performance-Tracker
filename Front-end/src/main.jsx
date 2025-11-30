import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import Header from './components/Header/Header.jsx'
import "./index.css";
import App from './App.jsx'
import AppRouting from './router/AppRouting.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <AppRouting />
    <Header />
    </BrowserRouter>
  </StrictMode>,
)
