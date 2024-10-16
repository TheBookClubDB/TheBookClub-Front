import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import FormularioDeCadastroDeAutor from '../../components/Formulario';
import Titulo from '../../components/Titulo';
import Breadcrumb from '../../components/BreadCrumb';


const FormAutor = () => {
  return (
    <>
      <Header/>
      <Box sx={{ display: 'flex'}}>
        <Sidebar pagina="cAutor"/>
        <Container sx={{margin: 0}}>
          <Breadcrumb
            paginaAtual="Cadastrar Autores"  
          />
          <Titulo
            titulo='Adicionar Pessoa Autora'
          />
          <FormularioDeCadastroDeAutor/>
        </Container>
      </Box>
    </>
  )
}

export default FormAutor;