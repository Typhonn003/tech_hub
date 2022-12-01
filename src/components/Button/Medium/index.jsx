import { StyledCommonButton, StyledLink as Link } from "./style";

export function CommonButton({ children, onClick }) {

  return (
    <StyledCommonButton onClick={onClick}>{children}</StyledCommonButton>
  );
}

export function StyledLink({ children, to }) {

  return (
    <Link to={to}>{children}</Link>
  );
}