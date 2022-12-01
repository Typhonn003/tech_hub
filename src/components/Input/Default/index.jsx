import { StyledInput } from "./style";

export function Input({ children, id, label, type, placeholder, register, error }) {
  
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledInput type={type} placeholder={placeholder} id={id} {...register}>{children}</StyledInput>
      {error}
    </fieldset>
  );
}
