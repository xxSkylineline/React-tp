import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Page } from './TAREA-2/tarea-2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
