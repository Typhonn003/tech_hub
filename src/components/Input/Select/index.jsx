import { StyledSelect } from "./style";

export function Select({ children, id }) {

  return (
    <StyledSelect id={id}>{children}</StyledSelect>
  );
}
