import styles from './Guitarra.module.css'
import { useParams } from 'react-router-dom';
import guitarrasJson from 'json/guitarras.json';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Guitarra() {
    const parametros = useParams();
    const navigate = useNavigate();
    const guitarras = guitarrasJson.find((guitarra) => {
        return guitarra.id === Number(parametros.id);
    })
    console.log(guitarras)
    return (
        <div>
            <h1 className={styles.tituloMarca}>{guitarras.marca}</h1>
            <div className={styles.SecaoCardGuitarra}>
                <div className={styles.botaoVoltar} onClick={() => navigate(-1)}><IoIosArrowDropleftCircle /> Voltar</div>
                <div className={styles.cardGuitarra}>
                    <img src={guitarras.imagem1} alt={guitarras.altImagem1}/>
                    <h2 className={styles.tituloModelo}>{guitarras.tituloImagem1}</h2>
                </div>
                <div className={styles.cardGuitarra}>
                    <img src={guitarras.imagem2} alt={guitarras.altImagem2} />
                    <h2 className={styles.tituloModelo}>{guitarras.tituloImagem2}</h2>
                </div>
                <div className={styles.cardGuitarra}>
                    <img src={guitarras.imagem3} alt={guitarras.altImagem3} />
                    <h2 className={styles.tituloModelo}>{guitarras.tituloImagem3}</h2>
                </div>
            </div>
        </div>
    )
}

export default Guitarra;