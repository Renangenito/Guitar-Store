import CardMarca from '../../components/CardMarca';
import styles from './ProdutosMarcas.module.css';
import marcasGuitarras from 'json/marcasGuitarra.json';


function ProdutosMarcas() {
    
    return (
            <section className={styles.secaoProdutos}>
                <h1 className={styles.secaoTitulo}>Marcas de Guitarras</h1>
                <div className={styles.listaProdutos}>
                    {marcasGuitarras.map(marca => (
                        <CardMarca key={marca.id} titulo={marca.marca} src={marca.imagem} alt={marca.alt} id={marca.id}/>
                    ))}
                </div>
            </section>
    )
}

export default ProdutosMarcas;