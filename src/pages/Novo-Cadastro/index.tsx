import { Container, Content, Inputs, Botao } from "./style";
import { Router, Route, Link,useHistory } from 'react-router-dom';

import Voltar from "../../assets/Voltar.svg";
import { useState } from "react";
import api from "../../services/api";

export function NovoCadastro() {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try{
      await api.post("/user", { name,email, password });
      history.push('/')
    }catch(e){
      console.log("ERRO no Cadastro");
    }
    
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Cadastro</h1>
            <p>
              Cadastre aqui um novo usuário para acessar o sistema de
              barramento!
            </p>
            <Link to={`/`}>
              <Botao>
                <img src={Voltar} alt="" />
                <h2>Voltar para o logon</h2>
              </Botao>
            </Link>
          </div>

          <Inputs>
            <input 
              placeholder="Nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="String"></input>
            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="String"
            ></input>
            <input
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
            <button type="submit">
              <h3>Cadastrar</h3>
            </button>
          </Inputs>
        </form>
      </Content>
    </Container>
  );
}
