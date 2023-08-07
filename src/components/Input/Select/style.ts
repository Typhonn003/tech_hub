import styled from "styled-components";

export const StyledSelect = styled.select`
  box-sizing: border-box;

  height: 40px;
  width: 100%;

  outline: none;

  background-color: var(--color-grey2);

  color: var(--color-grey1);

  border-radius: var(--radius-4);
  border: 2px solid var(--color-grey2);

  padding: 0 12px;

  font-family: "Inter", sans-serif;
  font-weight: 400;

  &:focus {
    border: 2px solid var(--color-grey0);
  }
`;
