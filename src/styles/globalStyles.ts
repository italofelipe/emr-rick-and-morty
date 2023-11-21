import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
   
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    html:focus-within {
    scroll-behavior: smooth;
    }

    body {
        background: rgb(134,131,185);
        background: linear-gradient(90deg, rgba(134,131,185,1) 7%, rgba(166,199,108,1) 43%, rgba(240,177,100,1) 85%);
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    img,
    picture {
    max-width: 100%;
    display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

`;
