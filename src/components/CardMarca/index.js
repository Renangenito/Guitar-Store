import { Link } from 'react-router-dom';
import styles from './CardMarca.module.css';

function CardMarca({ src, alt, titulo, id }) {
    return (
        <Link to={`/guitarras/${id}`} className={styles.itemMarca}>
                <h2 className={styles.itemTitulo}>{titulo}</h2>
                <img className={styles.itemImagem} src={src} alt={alt} />
        </Link>
    )
}

export default CardMarca;