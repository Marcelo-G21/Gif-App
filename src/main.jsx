import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifApp } from './GIfApp.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifApp />
  </StrictMode>,
)
