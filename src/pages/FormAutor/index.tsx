import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Botao from '../../components/botao/Botao';
import Header from '../../components/Header';
import FormularioDeCadastroDeAutor from '../../components/FormularioDeCadastroDeAutor';

const FormAutor = () => {
  return (
    <>
      <Header/>
      <Box sx={{ display: 'flex'}}>
        <Sidebar item="autor"/>
        <Container>
          <FormularioDeCadastroDeAutor/>
          <Botao texto="cancelar" variante="outlined" onClick={() => {}} />
          <Botao texto="salvar" variante="contained"  onClick={() => {}} />
        </Container>
      </Box>
    </>
  )
}

export default FormAutor;