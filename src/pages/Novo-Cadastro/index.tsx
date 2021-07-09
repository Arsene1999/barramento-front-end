import { Container, Content, Inputs, Botao } from "./style";

import { Link } from "react-router-dom";
import Voltar from "../../assets/Voltar.svg";
import { useState } from "react";
import api from "../../services/api";

export function NovoCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const response = await api.post("/user", { email, password });

    console.log(response);
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
            <input placeholder="Nome" type="String"></input>
            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="String"
            ></input>
            <input
              placeholder="WhatsApp"
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
