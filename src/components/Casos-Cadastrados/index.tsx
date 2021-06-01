import React from "react";
import { Container, Content, Cards } from "./style";
import Apagar from '../../assets/Apagar.svg';

export function Body() {
    return (
      <Container>
        <Content>
          <h1>Casos cadastrados</h1>
          <Cards>
            
          <div>
              <h3>
                Caso:
                <button type="button">
                  <img src={Apagar} alt="" />
                </button>
              </h3>
              <p>Cadelinha atropelada</p>
              <h3>Descrição:</h3>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <h3>Valor:</h3>
              <p>R$ 120,00 reais</p>
            </div>

            <div>
              <h3>
                Caso:
                <button type="button">
                  <img src={Apagar} alt="" />
                </button>
              </h3>
              <p>Cadelinha atropelada</p>
              <h3>Descrição:</h3>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <h3>Valor:</h3>
              <p>R$ 120,00 reais</p>
            </div>
            
            <div>
              <h3>
                Caso:
                <button type="button">
                  <img src={Apagar} alt="" />
                </button>
              </h3>
              <p>Cadelinha atropelada</p>
              <h3>Descrição:</h3>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <h3>Valor:</h3>
              <p>R$ 120,00 reais</p>
            </div>

            <div>
              <h3>
                Caso:
                <button type="button">
                  <img src={Apagar} alt="" />
                </button>
              </h3>
              <p>Cadelinha atropelada</p>
              <h3>Descrição:</h3>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <h3>Valor:</h3>
              <p>R$ 120,00 reais</p>
            </div>

            <div>
              <h3>
                Caso:
                <button type="button">
                  <img src={Apagar} alt="" />
                </button>
              </h3>
              <p>Cadelinha atropelada</p>
              <h3>Descrição:</h3>
              <p>
                A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.
              </p>
              <h3>Valor:</h3>
              <p>R$ 120,00 reais</p>
            </div>
            
          </Cards>
        </Content>
      </Container>
     
    );
  }
  