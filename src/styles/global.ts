import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #E5E5E5;
        --red: #E02041;
        --white: #F0F0F5;
        --lInput: #DCDCE6;
        --textos: #737380;
        --textosSec: #A8A8B3;
        --titulos: #13131A;
        --titulosSec: #41414D;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
`