import { Container, Content, Inputs } from "./style";
import Voltar from "../../assets/Voltar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const response = await api.post("/session", {
      email,
      password,
    });

    const { _id } = response.data;

    console.log(response);
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Acesse o sistema</h1>

            <Inputs>
              <input
                placeholder="Login"
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
              <Link to={`/home`}>
                <button type="submit">Entrar</button>
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
