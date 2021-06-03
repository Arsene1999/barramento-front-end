import {Container, Content, Cadastrar, TurnOFF} from './style';
import image from '../../assets/Logo.png';
import Sair from '../../assets/Sair.svg';
import { Link } from 'react-router-dom';

export function Header() {
    return (
      <Container>
          <Content>
            <div>
                <img src={image} />
                <h1>Olá,João</h1>
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
              
                <TurnOFF><img src={Sair} alt="" /></TurnOFF>
            </div>
                            
          </Content>
          
      </Container>
        
      
    );
  }
  