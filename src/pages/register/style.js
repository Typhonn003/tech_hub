import styled from "styled-components";

export const StyledDiv = styled.div`

  div {
    max-width: 360px;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;

    font-weight: 600;
    font-size: 0.625rem;

    color: var(--color-grey1);
  }

  form {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: 1.5em;

    width: 100%;

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
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;

  h1 {
    color: var(--color-primary);
  }
`;
