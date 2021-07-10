import React, { useEffect, useState } from "react";
import { Container, Content, Cards, Cadastrar,FazOque } from "./style";
import Apagar from "../../assets/Apagar.svg";
import Modal from "react-modal";
import api from '../../services/api';

interface IProjetos{
  _id:string;
  name: String,
  description: String,
  type:String,
}

interface IRelacionados{
  name:string,
  host:string,
  query:string,
  port:string,
}

export function Body() {
  const [projetos, setProjetos] = useState<IProjetos[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [delId, setDelID] = useState("ioi");
  const [change, setChange] = useState(true);
  const [isOpenFile, setIsOpenFile] = useState(false);
  const [relacionados, setRelacionados] = useState<IRelacionados[]>([]);

  function openModal(id:string) {
    setDelID(id);
    //console.log(delId);
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
  }

  function fOpen(id : string){
    setDelID(id);
    Cases();
    setIsOpenFile(true);
  }

  function fClose(){
    setIsOpenFile(false);
  }

  function handleDelete(){
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    api.delete(`/project/${delId}`);
    closeModal();
    setChange(!change);
  }

  function Cases(){
    api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    api.get(`/project/${delId}`).then(response => {
      console.log(response)
      const temp = response?.data?.searchConfig?.map((el: IRelacionados) => {  
        return el;
      });
      //console.log(temp)
      setRelacionados(temp);
    });
    setChange(!change);
    console.log(relacionados);
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
                <button onClick={() => {fOpen(projeto._id)}}>Saiba mais...</button>
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

      <Modal
       isOpen={isOpenFile} 
       onRequestClose={fClose} 
       overlayClassName="react-modal-overlay" 
       className="react-modal-content-serv"
      >
        <Content>
            <h1 style={{fontSize:"2.5rem"}}>
              Serviços Cadastrados
            </h1>
            <div >
            {relacionados.map((relacionado) => (
              <FazOque key={relacionado.name} style={{marginTop:"10px"}}> 
                <div >
                  <h3 style={{marginRight:"0.5rem"}}>
                    Nome: 
                  </h3>
                  <p>{relacionado.name}</p>
                </div>
                <div>
                  <h3 style={{marginRight:"0.5rem"}}>
                    Host:  
                  </h3>
                  <p>{relacionado.host}</p>
                </div>
                <div>
                  <h3 style={{marginRight:"0.5rem"}}>
                    Requisição: 
                  </h3>
                  <p>{relacionado.query} </p>
                </div>
                <div>
                  <h3 style={{marginRight:"0.5rem"}}>
                    Porta:
                  </h3>
                  <p>{relacionado.port}</p>
                </div>
                <div 
                style={{width:"100%",
                maxWidth:"60%",
                borderBottom:"1px solid var(--textosSec)",
                position:"absolute",marginBottom:"3px"}}></div>
            </FazOque>
            ))}
            </div>
        </Content>
      </Modal>

    </Container>

  );
}
