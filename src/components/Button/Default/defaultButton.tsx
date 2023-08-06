import {
  StyledPrimaryButton,
  StyledNegativeButton,
  StyledLink as Link,
} from "./style";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type: "submit" | "button";
  disabled?: boolean;
}

interface LinkProps {
  children: ReactNode;
  to: string;
}

export const PrimaryButton = ({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <StyledPrimaryButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledPrimaryButton>
  );
};

export const NegativeButton = ({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <StyledNegativeButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledNegativeButton>
  );
};

export const StyledLink = ({ children, to }: LinkProps) => {
  return <Link to={to}>{children}</Link>;
};
