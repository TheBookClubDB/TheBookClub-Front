import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import RoutesProvider from './routes/RoutesProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesProvider/>
  </StrictMode>,
)
