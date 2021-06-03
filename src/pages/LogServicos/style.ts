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
export const Log = styled.div`
    
    table{
        width:100%;
        border-spacing:0 0.5rem;
        overflow: hidden;

        
        th{
            font-weight: 600;
            font-size:1.5rem;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            
            border-radius: 0.25rem;

            &::first-child{
                color:var(--text-title);
            }

            &.deposit {
                color:var(--green);
            }

            &.withdraw{
                color:var(--red);
            }
        
        
        }

    }


`;
/*
export const Log = styled.tbody`
    background-color: #e1e1e1;
    width: 100%;
    height: 75vh;
    border-radius: 8px;
    list-style-type: none;
    overflow: overlay;

    
    li{ 
        
        background:var(--white);
        border-radius:8px;
        margin-bottom:0.5rem;
        padding: 1.5rem 2rem;
        
        &:last-child{
            margin-bottom: 0rem;
        }
        
        p{ 
            color: var(--textosSec);
            padding: 0.5rem 0 0.5rem;
        }

        p,h3{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.15rem;
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

    
`*/