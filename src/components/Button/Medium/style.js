import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMediumButton = styled.button`
  height: 32px;
`;

export const StyledCommonButton = styled(StyledMediumButton)`
  background-color: var(--color-grey3);

  :hover {
    background-color: var(--color-grey2);
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;

  color: var(--color-white);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey3);

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  height: 32px;

  padding: 0 22px;

  border-radius: var(--radius-4);
  border: none;

  :hover {
    background-color: var(--color-grey2);
  }
`;
