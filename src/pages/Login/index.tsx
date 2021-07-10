import {Container, Content, Inputs} from './style';
import Logo from '../../assets/Logo (2).png';
import Pessoas from '../../assets/Pessoas.png';
import Voltar from '../../assets/Voltar.png';
import React, { useState } from 'react';

import axios from 'axios';
import api from '../../services/api';
import { Router, Route, Link,useHistory } from 'react-router-dom';


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  async function handleSubmit(e:any){
    e.preventDefault();
    //onsole.log("goo");
    //chanudinho4@hotmail.com
    try{
      const res = await api.post('/session', {
        "email": email,
        "password": password
     }).then(response => {
      localStorage.setItem("nome",response?.data?.user?.name)
      localStorage.setItem("token",response?.data?.token);
     });

     history.push('/home')
    }catch(e){
      console.log(e);
    }

  };
  
  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Faça seu logon</h1>

            <Inputs>
              <input placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="String"></input>
              <input placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"></input>
            
              <button type="submit">Entrar</button>
              
            </Inputs>
            <Link to={`/new-user`}>
              <img src={Voltar} alt="" />            
            </Link>
          </div>
          
        </form>
      </Content>
    </Container>
  );
}
