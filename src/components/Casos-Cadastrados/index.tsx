import React from "react";
import { Container, Content, Cards } from "./style";
import Apagar from "../../assets/Apagar.svg";

export function Body() {
  const servicos = [
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
    {
      name: "CA",
      type: "Sistema",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
    },
  ];
  return (
    <Container>
      <Content>
        <h1>Sistemas cadastrados</h1>
        {servicos.length > 0 ? (
          <Cards>
            {servicos.map((servico) => (
              <div>
                <h3>
                  Sistema:
                  <button type="button">
                    <img src={Apagar} alt="" />
                  </button>
                </h3>
                <p>{servico.name}</p>
                <h3>Tipo:</h3>
                <p>{servico.type}</p>
                <h3>Descrição:</h3>
                <p>{servico.description}</p>
              </div>
            ))}
          </Cards>
        ) : (
          <div className="empty">Não há :(</div>
        )}
      </Content>
    </Container>
  );
}
