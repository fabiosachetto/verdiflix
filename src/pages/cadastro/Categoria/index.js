import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastrar Categoria</h1>

      <Link to="/">Ir para a Home</Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
