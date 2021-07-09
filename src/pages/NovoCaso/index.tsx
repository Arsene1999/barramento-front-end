import { Container, Content, Inputs, Botao } from "./style";

import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import Voltar from "../../assets/Voltar.svg";

export function NovoCaso() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <form>
            <div>
              <h1>Cadastrar novo serviço</h1>
              <p>
                Aqui você poderá cadastrar um novo sistema no barramento, esse
                sistema será capaz de fazer e receber requisições de todos os
                nossos sistemas.
              </p>
              <Link to={`/home`}>
                <Botao>
                  <img src={Voltar} alt="" />
                  <h2>Voltar para home</h2>
                </Botao>
              </Link>
            </div>

            <Inputs>
              <input placeholder="Nome do Sistema" type="String"></input>
              <input
                placeholder="Descrição"
                type="String"
                style={{ paddingBottom: "6rem" }}
              ></input>
              <input placeholder="Acesso" type="String"></input>
              <div>
                <button
                  style={{
                    background: "transparent",
                    color: "var(--titulosSec)",
                    border: "3.5px solid #DCDCE6",
                  }}
                >
                  <h3>Cancelar</h3>
                </button>
                <button>
                  <h3>Cadastrar</h3>
                </button>
              </div>
            </Inputs>
          </form>
        </Content>
      </Container>
    </>
  );
}
