import styles from './Rodape.module.css';
function Rodape(){
    return(
        <footer className={styles.rodape}>
            <p className={styles.copyright}>&copy; Copyright Guitar Store - 2023</p>
        </footer>
    )
}

export default Rodape;