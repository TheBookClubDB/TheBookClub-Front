import { Box, Container } from "@mui/material"
import Sidebar from "../../components/Sidebar"

const FormAutor = () => {
    return (
        <Box sx={{ display: "flex"}}>
            <Sidebar item="autor"/>
            <Container/>
        </Box>
    )
}

export default FormAutor;