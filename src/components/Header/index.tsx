import { Container, Content, Cadastrar, TurnOFF } from "./style";
import Sair from "../../assets/Sair.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <h1>Olá, João</h1>
        </div>
        <div>
          <Link to={`/home`}>
            <Cadastrar style={{ marginRight: "1rem" }}>
              Serviços Cadastrados
            </Cadastrar>
          </Link>
          <Link to={`/log`}>
            <Cadastrar style={{ marginRight: "1rem" }}>
              Log de serviços
            </Cadastrar>
          </Link>
          <Link to={`/new-cad`}>
            <Cadastrar>Novo serviço</Cadastrar>
          </Link>
          <Link to={""}>
            <TurnOFF>
              <img src={Sair} alt="" />
            </TurnOFF>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
