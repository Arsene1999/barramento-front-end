import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Login } from './pages/Login';
import { Principal } from './pages/Principal';
import { NovoCadastro } from './pages/Novo-Cadastro';


ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={Principal} />
      <Route path="/new-user" exact={true} component={NovoCadastro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
