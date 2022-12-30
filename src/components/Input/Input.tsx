import { ReactNode } from "react";

import { InputStyle } from "./InputStyle";

interface iInputProps {
    type: string,
    children: ReactNode;
}

const Input = ({ type, children }: iInputProps) => {
    return (
        <InputStyle>
            <input type={type} autoComplete="off" required={true} placeholder=""/>
            <label>{children}</label>
        </InputStyle>
    );
};

export default Input;