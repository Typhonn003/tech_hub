import { StyledPrimaryButton, StyledNegativeButton, StyledDisableButton, StyledLink as Link } from "./style";

export function PrimaryButton({ children, onClick, type, disabled }) {

  return (
    <StyledPrimaryButton type={type} onClick={onClick} disabled={disabled}>{children}</StyledPrimaryButton>
  );
}

export function NegativeButton({ children, onClick, type, disabled }) {

  return (
    <StyledNegativeButton type={type} onClick={onClick} disabled={disabled}>{children}</StyledNegativeButton>
  );
}

export function StyledLink({ children, to }) {

  return (
    <Link to={to}>{children}</Link>
  );
}