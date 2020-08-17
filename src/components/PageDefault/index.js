import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault() {
    return (
        <div>
            <Menu />
            <a href="/" style={{margin: "0 auto", width: "128px", display: "block", color: "red", fontWeight: "bold"}}>Voltar para Home</a>
            <Footer />
        </div>
    );
}

export default PageDefault;