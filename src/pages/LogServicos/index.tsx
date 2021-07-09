import { Header } from "../../components/Header";
import { Container, Content, Log } from "./style";

export function LogServicos() {
  const logServicos = [
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
    {
      data: "09/07/2021",
      hora: "16:39",
      emissor: "João",
      receptor: "Marcelo",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Log de serviços</h1>
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
              {logServicos.length > 0 ? (
                <tbody>
                  {logServicos.map((logServico) => (
                    <tr>
                      <td>{logServico.data}</td>
                      <td>{logServico.hora}</td>
                      <td>{logServico.emissor}</td>
                      <td>{logServico.receptor}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>Não há</td>
                  </tr>
                </tbody>
              )}
            </table>
          </Log>
        </Content>
      </Container>
    </>
  );
}
