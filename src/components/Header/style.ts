import styled from "styled-components";

export const Container = styled.header`
    background:var(--background);
`

export const Content = styled.div`

    max-width: 1120px;
    margin: 0 auto;
    padding: 1.5rem 1rem; 
    display:flex;
    justify-content: space-between;

    div{
        display: flex;
        h1{
            padding: 1rem 1rem 1rem; 
            font-size: 1.5rem;
            font-weight: 600; 
        }
    }

    
`

export const Cadastrar = styled.button`
    background:var(--red);
    color:var(--white);
    padding: 1rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 500;

    transition:filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`
export const TurnOFF = styled.button`
    margin-left:1rem;
    background:var(--background);
    color:var(--red);
    padding: 0.5rem 1rem;
    border: 3.5px solid #DCDCE6;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;

    transition:filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`