import { StyledInput } from "./style";

export function Input({ children, id,  type, placeholder }) {
  
  return (
    <StyledInput type={type} placeholder={placeholder} id={id}>{children}</StyledInput>
  );
}
