import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: var(--color-black);

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    align-items: center;
    justify-content: center;

    min-height: 100vh;
  }

  h1 {
    text-align: center;

    color: var(--color-primary);

    margin-top: 2rem;
  }

  h2 {
    text-align: center;
  }

  form {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1.5em;

    width: 100%;
    max-width: 360px;

    background-color: var(--color-grey3);

    padding: 34px 18px;

    border-radius: var(--radius-4);

    margin-bottom: 2rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  span {
    position: absolute;
    bottom: -16px;
    right: 0;

    font-weight: 500;
    font-size: 0.75rem;

    color: var(--color-primary);
  }

  p {
    text-align: center;

    font-weight: 600;
    font-size: 0.625rem;

    color: var(--color-grey1);
  }
`;
