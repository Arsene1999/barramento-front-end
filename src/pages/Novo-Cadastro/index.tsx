import { Container, Content, Inputs, Botao } from "./style";

import { Link } from "react-router-dom";
import Voltar from "../../assets/Voltar.svg";

export function NovoCadastro() {
  return (
    <Container>
      <Content>
        <form>
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
            <input placeholder="E-mail" type="String"></input>
            <input placeholder="WhatsApp" type="password"></input>
            <button>
              <h3>Cadastrar</h3>
            </button>
          </Inputs>
        </form>
      </Content>
    </Container>
  );
}
