import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { MainContent, NavBar } from './App';
import { ParticlesBackground } from './ParticlesBackground';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticlesBackground />
    <NavBar/>
    <MainContent/>
    <App />
  </StrictMode>,
)
