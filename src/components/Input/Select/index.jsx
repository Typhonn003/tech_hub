import { StyledSelect } from "./style";

export function Select({ children, id, label, register, error, disabled }) {

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledSelect id={id} {...register} disabled={disabled}>{children}</StyledSelect>
      {error}
    </fieldset>
  );
}
