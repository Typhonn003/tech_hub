import { StyledCommonButton, StyledLink as Link } from "./style";

export function CommonButton({ children, onClick, type }) {

  return (
    <StyledCommonButton type={type} onClick={onClick}>{children}</StyledCommonButton>
  );
}

export function StyledLink({ children, to }) {

  return (
    <Link to={to}>{children}</Link>
  );
}