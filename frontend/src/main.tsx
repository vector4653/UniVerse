import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { MainContent, NavBar } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
    <MainContent/>
    <App />
  </StrictMode>,
)
