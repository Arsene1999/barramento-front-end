import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Principal } from './pages/Principal';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" exact={true} component={Principal} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
