import styles from "./titulo.module.css"
interface Info {
    titulo: string,
}


const Titulo = ({titulo}: Info) => {
    return (
        <>
            <h1 className={styles.titulo}>
                {titulo}
            </h1>
        </>
    )
}

export default Titulo;