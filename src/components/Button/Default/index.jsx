import { StyledPrimaryButton, StyledNegativeButton, StyledDisableButton, StyledLink as Link } from "./style";

export function PrimaryButton({ children, onClick, type }) {

  return (
    <StyledPrimaryButton type={type} onClick={onClick}>{children}</StyledPrimaryButton>
  );
}

export function NegativeButton({ children, onClick, type }) {

  return (
    <StyledNegativeButton type={type} onClick={onClick}>{children}</StyledNegativeButton>
  );
}

export function DisableButton({ children, onClick, type }) {
    
  return (
    <StyledDisableButton type={type} onClick={onClick}>{children}</StyledDisableButton>
  );
}

export function StyledLink({ children, to }) {

  return (
    <Link to={to}>{children}</Link>
  );
}