import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import FormAutor from './pages/FormAutor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormAutor />
  </StrictMode>,
)
