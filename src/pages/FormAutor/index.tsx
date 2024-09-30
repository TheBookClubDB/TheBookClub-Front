import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Botao from '../../components/botao/Botao';

const FormAutor = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <Sidebar item="autor"/>
      <Container>
        <Botao texto="cancelar" variante="outlined" onClick={() => {}} />
        <Botao texto="salvar" variante="contained"  onClick={() => {}} />
      </Container>
    </Box>
  )
}

export default FormAutor;