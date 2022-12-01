import { StyledSelect } from "./style";

export function Select({ children, id, label, register, error }) {

  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledSelect id={id} {...register}>{children}</StyledSelect>
      {error}
    </fieldset>
  );
}
