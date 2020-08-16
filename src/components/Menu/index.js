import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="VerdiFlix" title="VerdiFlix"></img>
            </a>

            <Button as="a" href="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;