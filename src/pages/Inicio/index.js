import styles from './Inicio.module.css';

function Inicio() {
    return (
        <div className={styles.divBanner}>
            <div className={styles.banner}>
                <h1 className={styles.titulo}>Guitar store</h1>
                <p className={styles.paragrafo}>Diferentes marcas, modelos e cores!</p>
            </div>
            <div className={styles.sobre}>
                <p>
                    Olá, O intuito desse site é mostrar alguns modelos e marcas incríveis de guitarras. Como músicos experientes, sabemos o quanto uma boa guitarra pode fazer a diferença em sua performance e é por isso que temos uma seleção de guitarras excepcionais e estamos animados para compartilhar com vocês.
                </p>
                <ul>
                    <li>
                        Opção 1: Marcas renomadas
                        Para começar, tenho algumas guitarras de marcas renomadas, como Fender, Gibson, etc. Essas são marcas conhecidas por sua qualidade de construção, som incrível e design clássico. Se você é um amante de guitarras e procura uma guitarra que atenda a esses critérios, tenho certeza que uma dessas guitarras será perfeita para você.
                    </li>
                    <li>
                        Opção 2: Cores vibrantes
                        Se você está procurando uma guitarra com um visual mais colorido, também tenho algumas opções para você. Tenho guitarras em uma variedade de cores vibrantes, incluindo vermelho, azul, amarelo e verde. Essas guitarras não só têm um som incrível, mas também farão você se destacar no palco.
                    </li>
                    <li>
                        Opção 3: Modelos diferentes
                        Além disso, tenho várias guitarras diferentes em termos de modelo. Se você está procurando uma guitarra elétrica, tenho modelos de corpo sólido, semi-acústicos e guitarras de corpo oco. Se você prefere violões, também tenho algumas opções excelentes. Há algo para todos nesta coleção.
                    </li>
                    <li>
                        Conclusão:
                        Em resumo, essas são apenas algumas das melhores guitarras disponiveis no mercado. Cada uma dessas guitarras foi cuidadosamente selecionada por sua qualidade,
                        aparência e som. Se você está procurando uma guitarra de qualidade, que seja bela e que produza um som incrível, certamente encontrará algo aqui que goste.
                        Obrigado pela sua atenção, e se você tiver alguma dúvida, por favor, não hesite em entrar em contato.
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Inicio;