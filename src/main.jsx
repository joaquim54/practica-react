import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HocksApp } from './HocksApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HocksApp />
  </StrictMode>,
)
