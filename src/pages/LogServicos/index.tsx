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
                        
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Hora</th>
                                <th>Emissor</th>
                                <th>Receptor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>18/07/199</td>
                                <td >
                                    00:00:00    
                                </td>
                                <td>
                                    João
                                </td>
                                <td>
                                   Andre     
                    
                                </td>
                                </tr>
                            <tr >
                                <td>18/07/199</td>
                                <td >
                                    00:00:00    
                                </td>
                                <td>
                                    João
                                </td>
                                <td>
                                   Andre     
                    
                                </td>
                                </tr>
                            <tr >
                                <td>18/07/199</td>
                                <td >
                                    00:00:00    
                                </td>
                                <td>
                                    João
                                </td>
                                <td>
                                   Andre     
                    
                                </td>
                                </tr>
                            <tr >
                                <td>18/07/199</td>
                                <td >
                                    00:00:00    
                                </td>
                                <td>
                                    João
                                </td>
                                <td>
                                   Andre     
                    
                                </td>
                                </tr>   
                        </tbody>
                    </table>
       
                </Log>
               </Content>
           </Container>
        </>
    );
}