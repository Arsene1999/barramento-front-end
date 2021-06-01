import React from "react";
import { Container, Content, Cards } from "./style";

export function Body() {
    return (
      <Container>
        <Content>
          <h1>Casos cadastrados</h1>
          <Cards>
            <div>
              <p>Caso:</p>
              <p>Cadelinha atropelada</p>
              <p>Descrição:</p>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <p>Valor:</p>
              <p>R$ 120,00 reais</p>
            </div>
          </Cards>
        </Content>
      </Container>
     
    );
  }
  