import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/home'
import './index.module.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
