import { StyledCommonButton, StyledLink as Link } from "./style";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: "submit" | "button";
}

interface LinkProps {
  children: ReactNode;
  to: string;
}

export const CommonButton = ({ children, onClick, type }: ButtonProps) => {
  return (
    <StyledCommonButton type={type} onClick={onClick}>
      {children}
    </StyledCommonButton>
  );
};

export const StyledLinkMedium = ({ children, to }: LinkProps) => {
  return <Link to={to}>{children}</Link>;
};
