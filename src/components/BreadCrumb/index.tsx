import { Typography, Breadcrumbs, Link } from "@mui/material";

interface Info {
    paginaAtual: string,
}

const Breadcrumb = ({paginaAtual}: Info) => {
    return (
        <Breadcrumbs sx={{ margin: "1vw 0"}}>
            <Link underline="hover" href="/adm">
                Home
            </Link>
            <Typography sx={{ color: 'text.primary' }}>{paginaAtual}</Typography>
        </Breadcrumbs>
    )
}

export default Breadcrumb;