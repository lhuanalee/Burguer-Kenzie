import { InputHTMLAttributes, forwardRef } from "react";

import { InputStyle } from "./InputStyle";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <InputStyle>
        <input required={true} id={id} ref={ref} {...rest} />
        <label>{label}</label>
      </InputStyle>
    );
  }
);

export default Input;
