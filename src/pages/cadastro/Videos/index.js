import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastrar Categoria</h1>

      <Link to="/cadastro/categoria"></Link>

      <Link
        to="/"
        style={{
          margin: "0 auto",
          padding: "10px",
          display: "block",
          color: "red",
          fontWeight: "bold",
        }}
      >
        Ou clique aqui para voltar para Home.
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
