import React from 'react';
import { FooterBase } from './styles';
import CV from '../../assets/img/logo_linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/fabioverdi/" target="_blank">
        <img className="CV" src={CV} alt="Meu LinkeDin" title="Meu LinkeDin"></img>
        
      </a>
      <p>
        Estudo orgulhosamente criado na pandemia.
      </p>
    </FooterBase>
  );
}

export default Footer;
