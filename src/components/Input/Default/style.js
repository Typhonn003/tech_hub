import styled from "styled-components";

export const StyledInput = styled.input`
  box-sizing: border-box;

  height: 40px;
  width: 100%;
  max-width: 264px;

  outline: none;

  background-color: var(--color-grey2);

  color: var(--color-grey0);

  border-radius: var(--radius-4);
  border: 2px solid var(--color-grey2);

  padding: 0 16px;

  font-family: "Inter", sans-serif;
  font-weight: 400;

  ::placeholder {
    color: var(--color-grey1);
  }

  :focus {
    border: 2px solid var(--color-grey0);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--color-grey2) inset !important;
    -webkit-text-fill-color: var(--color-grey0);
  }
`;
