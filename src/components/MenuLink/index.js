import { Link, useLocation } from "react-router-dom";
import styles from '../MenuLink/MenuLink.module.css';

function MenuLink({ to, children }) {
    const localizacao = useLocation();
    return (

        <header>
            <nav className={styles.navegacao}>
                <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ''}`}
                    to={to}>{children}
                </Link>
            </nav>
        </header>
    )
}

export default MenuLink;