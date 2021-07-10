import { Container, Content, Inputs, Botao } from "./style";
import { Header } from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import Voltar from "../../assets/Voltar.svg";
import { useState } from "react";
import api from "../../services/api";

export function FormConfiguracao() {
  return (
    <>
      <div>
        <input placeholder="Nome da query" type="String"></input>
        <input placeholder="Host" type="String"></input>
      </div>
      <input placeholder="Query" type="String"></input>
      <div>
        <input placeholder="Porta" type="String"></input>
        <input placeholder="Usuário" type="String"></input>
        <input placeholder="Senha" type="String"></input>
      </div>
    </>
  );
}

export function NovoCaso() {
  const [nameSistema, setNameSistema] = useState("");
  const [descricao, setDescricao] = useState("");
  const [type, setType] = useState("");
  const history = useHistory();

  async function handleSubmit(e: any) {
    e.preventDefault();
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
      "token"
    )}`;

    try {
      const res = await api.post("/project", {
        name: nameSistema,
        type: type,
        searchConfig: [
          {
            name: "aaaa",
            query: "SELECT * FROM blabla.ble",
            host: "localhost",
            port: 3306,
            user: "root",
            password: "1234",
            description: "seila",
          },
        ],
      });

      history.push("/home");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <form onSubmit={handleSubmit}>
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
              <h3>Sistema</h3>
              <input
                placeholder="Nome do Sistema"
                type="String"
                value={nameSistema}
                onChange={(e) => setNameSistema(e.target.value)}
              ></input>
              <input
                placeholder="Descrição"
                type="String"
                style={{ paddingBottom: "6rem" }}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></input>
              <input
                placeholder="Tipo"
                type="String"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></input>
              <h3>Configurações do sistema</h3>
              <FormConfiguracao />
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
