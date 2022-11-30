import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #FF577F;
    --color-primary-hover: #FF427F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey4: #121214;
    --color-grey3: #212529;
    --color-grey2: #343B41;
    --color-grey1: #868E96;
    --color-grey0: #F8F9FA;
    --color-text: #FFFFFF;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-sucess: #3FE864;
    --color-negative: #E83F5B;

    --radius-8: 0.5rem;
    --radius-4: 0.25rem;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    font-family: 'Inter', sans-serif;
	vertical-align: baseline;
}

button {
    cursor: pointer;

    color: var(--color-white);

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1rem;

    height: 48px;
    min-width: 48px;

    padding: 0 22px;

    border-radius: var(--radius-4);
    border: none;

    transition: .5s;
}
`;
