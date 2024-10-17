import styles from './naoEncontrada.module.css'
import Botao from "../../components/botao/Botao"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NaoEncontrada = () => {
    const navigate = useNavigate()

    const redirecionamento = () => {
        navigate('/')
    }

    return (
        <Box className={styles.pageBody}>
            <h3>Página não encontrada!</h3>
            <Botao
                onClick={redirecionamento}
                texto="Voltar para Home"
                variante='outlined'
            />
        </Box>
    )
}

export default NaoEncontrada;