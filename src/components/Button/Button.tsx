import { ReactNode } from "react";

import { ButtonStyle } from "./ButtonStyle";

interface iButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ type, className, onClick, children }: iButtonProps) => {
  return (
    <ButtonStyle type={type} className={className} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
