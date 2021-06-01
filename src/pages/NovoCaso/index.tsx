import {Container, Content, Inputs, Botao} from './style';

import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo (1).png';
import Voltar from '../../assets/Voltar.svg';


export function NovoCaso(){
    return(
        <Container>
            <Content>
                <form>
                    <div>
                        <img src={Logo} alt="" />
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                        <Link  to={`/home`}>
                            <Botao> 
                                <img src={Voltar} alt="" /> 
                                <h2>Voltar para home</h2>
                            </Botao>
                        </Link>
                        
                    </div>
                    
                    <Inputs>
                        <input placeholder="Título do caso"  type="String"></input>
                        <input placeholder="Descrição"  type="String" style={{paddingBottom:"6rem"}}></input>
                        <input placeholder="Valor em reais"  type="String"></input>
                        <div>
                            <button style={{background:"transparent",color:"var(--titulosSec)",border:"3.5px solid #DCDCE6"}}><h3>Cancelar</h3></button>
                            <button><h3>Cadastrar</h3></button>
                        </div>
                        
                    </Inputs>
                    
                </form>    
            </Content>
        </Container>
    );
}