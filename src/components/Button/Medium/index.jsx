import { StyledCommonButton } from "./style";

export function CommonButton({ children, onClick }) {

  return (
    <StyledCommonButton onClick={onClick}>{children}</StyledCommonButton>
  );
}
