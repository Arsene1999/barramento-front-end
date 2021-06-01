import {Container, Content, Inputs} from './style';
import Logo from '../../assets/Logo.png';
import Voltar from '../../assets/Voltar.svg';

export function NovoCadastro(){
    return(
        <Container>
            <Content>
                <form>
                    <div>
                        <img src={Logo} alt="" />
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                        
                        <button> 
                            <img src={Voltar} alt="" /> 
                            <h2>Voltar para o logon</h2>
                        </button>
                    </div>
                    
                    <Inputs>
                        <input placeholder="Nome da ONG"  type="String"></input>
                        <input placeholder="E-mail"  type="String"></input>
                        <input placeholder="WhatsApp"  type="String"></input>
                        <div style={{marginTop:"-0.5rem"}}>
                            <input placeholder="Cidade" style={{marginRight:"0.5rem"}} type="String"></input>
                            <input placeholder="UF" style={{width:"15%"}} type="String"></input>
                        </div>
                        <button><h3>Cadastrar</h3></button>
                    </Inputs>
                    
                </form>    
            </Content>
        </Container>
    );
}