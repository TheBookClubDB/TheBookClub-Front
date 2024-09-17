import { Box, Divider, List, ListItem, TextField } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from "./sidebar.module.css"
import { useEffect } from "react";

interface itemClicado {
    item: string
}

const Sidebar = (props: itemClicado) => {

    const lidarItemSelecionado = (itemSelecionado: string) => {
        let componente = null;
        switch (itemSelecionado) {
            case "aluguel":
                componente = document.querySelector('#aluguelItem')
                break;
            case "geren":
                componente = document.querySelector('#gerenItem')
                break;
            case "autor":
                componente = document.querySelector('#autorGerenItem')
                break;
            case "locat":
                componente = document.querySelector('#locatGerenItem')
                break;
            case "livros":
                componente = document.querySelector('#livrosGerenItem')
                break;
            default:
                break;
        }
        if (componente) {
            (componente as HTMLElement).style.backgroundColor = "rgba(33, 147, 243, 0.1)"
        }
    }

    useEffect(() => {
        lidarItemSelecionado(props.item)
    }, [])

    return(
        <Box display='flex'>
            <Box className={styles.sidebarContainer}> 
                <TextField 
                    className={styles.campoBusca} 
                    placeholder="Pesquisar"
                    size="small"
                />
                <List className={styles.lista}>
                    <ListItem id="aluguelItem">
                        <LogoutIcon className={styles.iconeLista}/>
                        Aluguel
                    </ListItem>
                    <Divider/>
                    <ListItem id="gerenItem">
                        <SettingsIcon className={styles.iconeLista}/>
                        Gerenciador
                    </ListItem>
                    <Divider/>
                    <ListItem id="autorGerenItem">
                        Gerenciar Autores
                    </ListItem>
                    <ListItem id="locatGerenItem">
                        Gerenciar Locatários
                    </ListItem>
                    <ListItem id="livrosGerenItem">
                        Gerenciar Livros
                    </ListItem>
                </List>
            </Box>
            <Divider orientation="vertical" variant="fullWidth" sx={{ color: 'red'}}/>
        </Box>
    )
}

export default Sidebar;