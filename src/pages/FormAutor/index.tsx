import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import FormularioDeCadastroDeAutor from '../../components/Formulario';


const FormAutor = () => {
  return (
    <>
      <Header/>
      <Box sx={{ display: 'flex'}}>
        <Sidebar pagina="cAutor"/>
        <Container>
          <FormularioDeCadastroDeAutor/>
        </Container>
      </Box>
    </>
  )
}

export default FormAutor;