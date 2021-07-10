import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F0F5;
        --red: #E02041;
        --white: #FFFFFF;
        --lInput: #DCDCE6;
        --textos: #737380;
        --textosSec: #A8A8B3;
        --titulos: #13131A;
        --titulosSec: #41414D;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: var(--background);
    }

    .react-modal-overlay{
        background:rgb(0,0,0,0.5);
        position:fixed;
        bottom:0;
        top:0;
        left:0;
        right:0;

        display:flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        width:100%;
        max-width:426px;
        background: var(--background);
        padding: 3rem;
        position:relative;
        border-radius: 0.25rem;
    }

    .react-modal-content-serv{
        width:100%;
        max-width:700px;
        background: var(--background);
        padding: 3rem;
        position:relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position:absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition:filter(0.2s);
        
        &:hover{
            filter:brightness(0.8);
        }

`