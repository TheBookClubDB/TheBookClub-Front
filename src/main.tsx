import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import FormularioDeCadastroDeAutor from './components/FormularioDeCadastroDeAutor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormularioDeCadastroDeAutor />
    {/* <RoutesProvider/> */}
  </StrictMode>,
)
