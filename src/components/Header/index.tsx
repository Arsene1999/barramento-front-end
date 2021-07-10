import {Container, Content, Cadastrar, TurnOFF} from './style';
import image from '../../assets/Logo.png';
import Sair from '../../assets/Sair.svg';
import { Link, useHistory } from 'react-router-dom';


export function Header() {
  const user = localStorage.getItem("nome");  
  const history = useHistory();
  return (
      <Container>
          <Content>
            <div>
                
                <h1>Olá,{user}</h1>
            </div>
            <div>
              <Link to={`/home`}>
                <Cadastrar style={{marginRight:"1rem"}}>Serviços Cadastrados</Cadastrar>
              </Link>
              <Link to={`/log`}>
                <Cadastrar style={{marginRight:"1rem"}}>Log de serviços</Cadastrar>
              </Link>
              <Link to={`/new-cad`}>
                <Cadastrar >Novo serviço</Cadastrar>
              </Link>
              
                <TurnOFF onClick={()=>{
                  localStorage.removeItem("nome");
                  localStorage.removeItem("token");
                  history.push('/');
                }}><img src={Sair} alt="" /></TurnOFF>
            </div>
                            
          </Content>
          
      </Container>
        
      
    );
  }
  