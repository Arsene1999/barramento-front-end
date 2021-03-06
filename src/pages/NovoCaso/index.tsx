import { Container, Content, Inputs, Botao } from "./style";
import { Header } from "../../components/Header";
import { Link, useHistory } from "react-router-dom";
import Voltar from "../../assets/Voltar.svg";
import { useState } from "react";
import api from "../../services/api";

export function NovoCaso() {
  const [nameSistema, setNameSistema] = useState("");
  const [descricao, setDescricao] = useState("");
  const [type, setType] = useState("");

  const [nameQuery, setNameQuery] = useState("");
  const [query, setQuery] = useState("");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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
        description: descricao,
        searchConfig: [
          {
            name: nameQuery,
            query: query,
            host: host,
            port: port,
            user: user,
            password: password,
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
              <div>
                <input
                  placeholder="Nome da query"
                  value={nameQuery}
                  onChange={(e) => setNameQuery(e.target.value)}
                  type="String"
                ></input>
                <input
                  placeholder="Host"
                  value={host}
                  onChange={(e) => setHost(e.target.value)}
                  type="String"
                ></input>
              </div>
              <input
                placeholder="Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="String"
              ></input>
              <div>
                <input
                  placeholder="Porta"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  type="String"
                ></input>
                <input
                  placeholder="Usuário"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="String"
                ></input>
                <input
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                ></input>
              </div>
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
                <button type="submit">
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
