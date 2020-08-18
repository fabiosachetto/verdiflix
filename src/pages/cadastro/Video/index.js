import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>

      <Link to="/cadastro/categoria">
          Cadastra Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
