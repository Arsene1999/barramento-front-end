import styled from "styled-components";

export const Container = styled.section`
    
`

export const Content = styled.div`

    max-width: 1120px;
    margin: 0 auto;
    padding: 1.5rem 1rem; 
    
    h1{ 
        padding-bottom: 1rem;
        display:block;
        font-size:2.5rem;
    }
`

export const Cards = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    
    div{ 
        background:var(--white);
        border-radius:8px;
        margin: 0 auto;
        padding: 1.5rem 2rem;

        p{ 
            color: var(--textosSec);
            padding: 0.5rem 0 0.5rem;
        }

        p,h3{
            display: flex;
            justify-content: space-between;
        }


        button{ 
            background: transparent;
            border:none;
            
            transition: filter 0.2s;
            &:hover{
                filter: brightness(0.7);
            }
        
        }
        
    }
`