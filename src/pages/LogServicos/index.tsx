import { Header } from '../../components/Header';
import {Container, Content, Log} from './style';

export function LogServicos(){
    return(
        <>
           <Header/>
           <Container>
               <Content>
                   <h1>
                       Log de serviços
                   </h1>
                    <Log>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                        <li>
                            <h3>Hora:</h3>
                            <h3>De:</h3>
                            <h3>Para:</h3>
                        </li>
                    </Log>
               </Content>
           </Container>
        </>
    );
}