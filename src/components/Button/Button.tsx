import { ReactNode } from "react";

import { ButtonStyle } from "./ButtonStyle";

interface iButtonProps {
    children: ReactNode;
    className: string,
}

const Button = ({ className, children }: iButtonProps) => {
    return (
        <ButtonStyle className={className}>{children}</ButtonStyle>
    );
};

export default Button;