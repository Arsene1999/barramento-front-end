import React, { useEffect, useState } from "react";
import { Container, Content, Cards, Cadastrar } from "./style";
import Apagar from "../../assets/Apagar.svg";
import Modal from "react-modal";
import api from '../../services/api';

interface IProjetos{
  _id:string;
  name: String,
  description: String,
  type:String,
}


export function Body() {
  const [projetos, setProjetos] = useState<IProjetos[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [delId, setDelID] = useState("ioi");
  const [change, setChange] = useState(true);

  function openModal(id:string) {
    setDelID(id);
    console.log(delId);
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleDelete(){
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    api.delete(`/project/${delId}`);
    closeModal();
    setChange(!change);
  }

  useEffect(()=>{
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    api.get('/project')
    .then(response => {
      const temp = response.data.map((el: IProjetos) => {
        return el;
      });
      //console.log(response.data)
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
              <div key={projeto._id} style={{minWidth:"100%"}}>
                
                <h3>
                  Sistema:
                  <button type="button" onClick={() => {openModal(projeto._id)}}>
                    <img src={Apagar} alt="" />
                  </button>
                  
                </h3>
                <p>{projeto.name}</p>
                <h3>Tipo:</h3>
                <p>{projeto.type}</p>
                <h3>Descrição:</h3>
                <p>{projeto?.description}</p>
              </div>
            ))}
          </Cards>
        ) : (
          <div className="empty">Não há :(</div>
        )}
      </Content>
      <Modal
       isOpen={isOpen} 
       onRequestClose={closeModal} 
       overlayClassName="react-modal-overlay" 
       className="react-modal-content"
      >
        <Content>
            <h1 style={{fontSize:"1.5rem"}}>
              Quer apagar esse sistema?
            </h1>
            <div style={{display:"flex",justifyContent:"center"}}>
              <Cadastrar 
                style={{color:"var(--red)",background:"var(--white)",marginRight:"0.5rem"}}
                onClick={() => {handleDelete()}}
                >Sim</Cadastrar>
              <Cadastrar 
              style={{marginLeft:"0.5rem"}}
              onClick={() => {closeModal()}}
              >Não</Cadastrar>
            </div>
        </Content>
      </Modal>
    </Container>

  );
}
