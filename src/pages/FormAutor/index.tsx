import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar'
import Header from '../../header/Header';

const FormAutor = () => {
  return (
    <>
      <Header/>
      <Box sx={{ display: 'flex'}}>
        <Sidebar item="autor"/>
        <Container/>
      </Box>
    </>
  )
}

export default FormAutor;