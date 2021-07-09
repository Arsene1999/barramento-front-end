import { Container, Content, Inputs } from "./style";
import Logo from "../../assets/Logo (2).png";
import Pessoas from "../../assets/Pessoas.png";
import Voltar from "../../assets/Voltar.png";
import React from "react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Container>
      <Content>
        <form>
          <div>
            <h1>Acesse o sistema</h1>

            <Inputs>
              <input placeholder="Login" type="String"></input>
              <input placeholder="Senha" type="password"></input>
              <Link to={`/home`}>
                <button>Entrar</button>
              </Link>
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
