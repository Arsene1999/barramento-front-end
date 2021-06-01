import styled from "styled-components";

export const Container = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.5rem 1rem; 
    height:100vh;
`

export const Content = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height:100%;

    form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3rem;

        h1{
            font-size: 2rem;
            font-weight:600;
            margin: 0 auto;
            padding: 2rem 0;
        }

        p{
            font-size: 1.5rem;
            font-weight:400;
            color:var(--textosSec);
            padding: 1rem 0 4rem 0;
        }

        a{
            text-decoration: none;
        }
    }
`
export const Botao = styled.button`
    background: transparent;
    border:none;
    display: flex;
    font-size: 1rem;

    transition:color 0.2s;

    &:hover {
        color: var(--red);
    }
`


export const Inputs = styled.div`
    
    input,button{
        border:none;
        border-radius: 8px;
        display: block;
        width: 100%;
        padding: 1.5rem;
        margin: 0.5rem 0rem;
    
        ::placeholder{
            font-size:1rem;
            font-weight: 400;
        }

        transition:filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
    

    button{
        background: var(--red);
        color: var(--white);
        font-size: 1rem;
        font-weight: 600;

        h3{
            font-size: 1.5rem;
            font-weight: 600; 
        }
    }

    div{
        display: flex;
    }
`

