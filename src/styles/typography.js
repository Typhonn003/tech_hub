import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
.title1 {
    font-weight: 700;
    font-size: 1.5rem;
}

.title2 {
    font-weight: 600;
    font-size: 1rem;
}

.title3 {
    font-weight: 500;
    font-size: 0.875rem;
}

.headline {
    font-weight: 400;
    font-size: 0.75rem;
}

.headline_bold {
    font-weight: 700;
    font-size: 0.75rem;
}

.headline_italic {
    font-weight: 400;
    font-size: 0.75rem;
    font-style: italic;
}
`;
