import React from 'react';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';
import logoGuitarra from '../../assets/guitar-logo.png';
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.logo} to="/">
                    <img src={logoGuitarra} width="30" alt='Logo da guitarra laranja' />
                    <p>Guitar Store</p>
                </Link>
                <div className={styles.menu}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/produtos">
                        Produtos
                    </MenuLink>
                </div>

            </nav>
        </header>
    )
}