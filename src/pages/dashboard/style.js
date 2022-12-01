import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100vw;
  min-height: 100vh;

  background-color: var(--color-black);

  h1 {
    color: var(--color-primary);
  }

  nav {
    border-bottom: 1px solid var(--color-grey2);
  }

  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;
  }
`;

export const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid var(--color-grey2);

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    color: var(--color-grey1);
  }

  @media (min-width: 1024px) {
    div {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
  }
`;

export const StyledSection = styled.section`
  padding: 20px;

  span {
    color: var(--color-primary);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
