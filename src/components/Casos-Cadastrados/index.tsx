import React from "react";
import { Container, Content, Cards } from "./style";
import Apagar from "../../assets/Apagar.svg";

export function Body() {
  return (
    <Container>
      <Content>
        <h1>Sistemas cadastrados</h1>
        <Cards>
          <div>
            <h3>
              Sistema:
              <button type="button">
                <img src={Apagar} alt="" />
              </button>
            </h3>
            <p>CA</p>
            <h3>Descrição:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimentum, dolor dapibus posuere venenatis, ante urna sagittis
              quam, a varius eros mauris a metus.
            </p>
          </div>
          <div>
            <h3>
              Sistema:
              <button type="button">
                <img src={Apagar} alt="" />
              </button>
            </h3>
            <p>Genus</p>
            <h3>Descrição:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimentum, dolor dapibus posuere venenatis, ante urna sagittis
              quam, a varius eros mauris a metus.
            </p>
          </div>
          <div>
            <h3>
              Sistema:
              <button type="button">
                <img src={Apagar} alt="" />
              </button>
            </h3>
            <p>SIGEC</p>
            <h3>Descrição:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimentum, dolor dapibus posuere venenatis, ante urna sagittis
              quam, a varius eros mauris a metus.
            </p>
          </div>
          <div>
            <h3>
              Sistema:
              <button type="button">
                <img src={Apagar} alt="" />
              </button>
            </h3>
            <p>SCP</p>
            <h3>Descrição:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              condimeSntum, dolor dapibus posuere venenatis, ante urna sagittis
              quam, a varius eros mauris a metus.
            </p>
          </div>
        </Cards>
      </Content>
    </Container>
  );
}
