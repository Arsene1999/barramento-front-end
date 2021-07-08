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
