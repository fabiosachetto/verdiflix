import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          /* OBS: Os(...) é pra avisar pra pegar o q tem tudo ai q vc já escreveu, não joga fora não sobrescreve. */
          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm(valoresIniciais);
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button className="btn-cadastrar">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Carregando */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
