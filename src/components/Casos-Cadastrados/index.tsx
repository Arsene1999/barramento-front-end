import React, { useEffect, useState } from "react";
import { Container, Content, Cards } from "./style";
import Apagar from "../../assets/Apagar.svg";

import api from '../../services/api';

interface IProjetos{
  id:string;
  name: String,
  description: String,
  type:String,
}


export function Body() {
  
  const [projetos, setProjetos] = useState<IProjetos[]>([]);
  //console.log(token)
  
  useEffect(()=>{
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    api.get('/project')
    .then(response => {
      const temp = response.data.map((el: IProjetos) => {
        return el;
      });
      setProjetos(temp);
    }
  )});
  
  return (
    <Container>
      <Content>
        <h1>Sistemas cadastrados</h1>
        {projetos.length > 0 ? (
          <Cards>
            {projetos.map((projeto) => (
              <div key={projeto.id}>
                <h3>
                  Sistema:
                  <button type="button">
                    <img src={Apagar} alt="" />
                  </button>
                </h3>
                <p>{projeto.name}</p>
                <h3>Tipo:</h3>
                <p>{projeto.type}</p>
                <h3>Descrição:</h3>
                <p>{projeto?.description}"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, dolor dapibus posuere venenatis, ante urna sagittis quam, a varius eros mauris a metus.",
                </p>
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
