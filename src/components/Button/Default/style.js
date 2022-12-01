import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button``;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: var(--color-primary);

  :hover {
    background-color: var(--color-primary-hover);
  }

  :disabled {
    background-color: var(--color-grey1);
  }
`;

export const StyledNegativeButton = styled(StyledButton)`
  background-color: var(--color-primary-negative);
`;

export const StyledLink = styled(Link)`
  cursor: pointer;

  color: var(--color-white);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey1);

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  height: 40px;

  padding: 0 22px;

  border-radius: var(--radius-4);
  border: none;

  transition: .5s;

  :hover {
    background-color: var(--color-grey2);
  }
`