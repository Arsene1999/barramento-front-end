import {Container, Content, Cadastrar, TurnOFF} from './style';
import image from '../../assets/Logo.png';
import Sair from '../../assets/Sair.svg';

export function Header() {
    return (
      <Container>
          <Content>
            <div>
                <img src={image} />
                <h1>Olá,João</h1>
            </div>
            <div>
                <Cadastrar>Cadastrar novo caso</Cadastrar>
                <TurnOFF><img src={Sair} alt="" /></TurnOFF>
            </div>
                            
          </Content>
          
      </Container>
        
      
    );
  }
  