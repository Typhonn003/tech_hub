import { StyledSelect } from "./style";
import { ReactNode } from "react";

interface SelectProps {
  children: ReactNode;
  id: string;
  label: string;
  register?: object;
  error?: ReactNode;
  disabled?: boolean;
  defaultValue?: string;
}

export const Select = ({
  children,
  id,
  label,
  register,
  error,
  disabled,
  defaultValue,
}: SelectProps) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledSelect
        id={id}
        {...register}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        {children}
      </StyledSelect>
      {error}
    </fieldset>
  );
};
