import { StyledPrimaryButton, StyledNegativeButton, StyledDisableButton } from "./style";

export function PrimaryButton({ children, onClick }) {

  return (
    <StyledPrimaryButton onClick={onClick}>{children}</StyledPrimaryButton>
  );
}

export function NegativeButton({ children, onClick }) {

  return (
    <StyledNegativeButton onClick={onClick}>{children}</StyledNegativeButton>
  );
}

export function DisableButton({ children, onClick }) {
    
  return (
    <StyledDisableButton onClick={onClick}>{children}</StyledDisableButton>
  );
}
