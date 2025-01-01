import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifApp } from './GIfApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifApp />
  </StrictMode>,
)
