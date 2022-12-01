import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--color-black);

  width: 100vw;
  height: 100vh;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
  }

  h1 {
    text-align: center;

    color: var(--color-primary);
  }

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    width: 100%;
    max-width: 300px;

    background-color: var(--color-grey3);

    padding: 34px 18px;

    border-radius: var(--radius-4);
  }

  p {
    text-align: center;

    font-weight: 600;
    font-size: 0.625rem;

    color: var(--color-grey1);
  }
`;

export const StyledSpacer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  width: 100%;
`;
