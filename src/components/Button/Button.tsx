import { ReactNode } from "react";

import { ButtonStyle } from "./ButtonStyle";

interface iButtonProps {
    className: string,
    children: ReactNode;
}

const Button = ({ className, children }: iButtonProps) => {
    return (
        <ButtonStyle className={className}>{children}</ButtonStyle>
    );
};

export default Button;