import styles from './CardGuitarra.module.css';

function CardGuitarra({ src1, alt1, src2, alt2, src3, alt3, titulo }) {
    return (
        <div className={styles.itemGuitarra}>
            <h2 className={styles.itemTitulo}>{titulo}</h2>
            <img className={styles.itemImagem} src={src1} alt={alt1} />
            <img className={styles.itemImagem} src={src2} alt={alt2} />
            <img className={styles.itemImagem} src={src3} alt={alt3} />
        </div>

    )
}

export default CardGuitarra;