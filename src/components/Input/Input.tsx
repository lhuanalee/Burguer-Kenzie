import { ReactNode } from "react";

import { InputStyle } from "./InputStyle";

interface iInputProps {
    type: string,
    children: ReactNode;
}

const Input = ({ type, children }: iInputProps) => {
    return (
        <InputStyle>
            <input type={type} placeholder="" required={true}/>
            <label htmlFor="">{children}</label>
        </InputStyle>
    );
};

export default Input;