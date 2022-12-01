import { StyledInput } from "./style";

export function Input({ children, id, label, type, placeholder, register, error, disabled }) {
  
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledInput type={type} placeholder={placeholder} id={id} {...register} disabled={disabled}>{children}</StyledInput>
      {error}
    </fieldset>
  );
}
