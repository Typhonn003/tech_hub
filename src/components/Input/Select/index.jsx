import { StyledSelect } from "./style";

export function Select({ children, id, label, register, error, disabled, defaultValue }) {

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledSelect id={id} {...register} disabled={disabled} defaultValue={defaultValue}>{children}</StyledSelect>
      {error}
    </fieldset>
  );
}
