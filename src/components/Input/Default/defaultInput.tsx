import { StyledInput } from "./style";
import { ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  id: string;
  label: string;
  type: "text" | "password" | "email" | "tel" | "number";
  placeholder?: string;
  register?: object;
  error?: ReactNode;
  disabled?: boolean;
  defaultValue?: string;
}

export const Input = ({
  children,
  id,
  label,
  type,
  placeholder,
  register,
  error,
  disabled,
  defaultValue,
}: InputProps) => {
  return (
    <fieldset>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        {...register}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        {children}
      </StyledInput>
      {error}
    </fieldset>
  );
};
