import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import RoutesProvider from './routes/RoutesProvider'
<<<<<<< HEAD
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RoutesProvider/>
    </ThemeProvider>
=======


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesProvider/>
>>>>>>> ae8d1b4 (Reformulando o formulario)
  </StrictMode>,
)
