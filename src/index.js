import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/Videos';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Pagina404 = () => (<div>404 <a href="/">Clique aqui para voltar para Home.</a></div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
