import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/header/Header';
import FormularioDeCadastroDeAutor from '../../components/FormularioDeCadastroDeAutor';

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