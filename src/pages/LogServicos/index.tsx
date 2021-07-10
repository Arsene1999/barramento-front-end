import React, { useEffect, useState } from "react";
import { Header } from '../../components/Header';
import {Container, Content, Log} from './style';
import api from '../../services/api';
import { format } from 'date-fns';

interface ILog{
    requested: String,
    message: String,
    createdAt:string,
    horaAt: string,
  }

export function LogServicos(){
    const [log, setLog] = useState<ILog[]>([]);
    
    useEffect(()=>{
        api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        api.get('/log')
        .then(response => {
          const temp = response.data.map((el: ILog) => {
            var aux = el.createdAt;
            el.createdAt = format(new Date(el.createdAt), 'dd-MM-yyyy');
            el.horaAt = format(new Date(aux),'HH:mm:ss' )
            
            return el;
          });
          
          setLog(temp);
        }
      )},[]);

      console.log(log);
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
                                <th>Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                        {log.map((LOG) => (
                            <tr >
                                <td>{LOG.createdAt}</td>
                                <td >
                                    {LOG.horaAt}
                                </td>
                               
                                <td>
                                    {LOG.message}
                                </td>
                            </tr>  
                        ))}
                        </tbody>
                    </table>
       
                </Log>
               </Content>
           </Container>
        </>
    );
}