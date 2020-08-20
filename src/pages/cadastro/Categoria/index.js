import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(["Teste"]);
  const [nomeDaCategoria, setNomeDaCategoria] = useState("Valor Inicial");

  return (
    <PageDefault>
      <h1>Cadastrar Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Vc tentou enviar o formulário!', nomeDaCategoria);
      }}>
        {/*UseState*/}
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandleQueOErroPediu(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>{nomeDaCategoria}</li>
          );
        })}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
