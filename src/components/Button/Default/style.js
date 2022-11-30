import styled from "styled-components";

const StyledButton = styled.button``;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: var(--color-primary);

  :hover {
    background-color: var(--color-primary-hover);
  }
`;

export const StyledNegativeButton = styled(StyledButton)`
  background-color: var(--color-primary-negative);
`;

export const StyledDisableButton = styled(StyledButton)`
  background-color: var(--color-grey1);

  :hover {
    background-color: var(--color-grey2);
  }
`;
