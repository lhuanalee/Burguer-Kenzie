import styled from "styled-components";

export const InputStyle = styled.div`
    width: 100%;

    position: relative;

    input {
        width: 100%;

        padding: 15px;

        border: 2px solid var(--color-brad);
        border-radius: 8px;

        font-size: var(--headline-size);
        font-weight: var(--caption-weight);

        color: var(--grey-4);
        background: var(--grey-1);

        outline: none;
    }

    label {
        padding: 17px;

        position: absolute;
        left: 0;

        border-left: 1px solid transparent;
        border-right: 1px solid transparent;

        font-size: var(--headline-size);
        font-weight: var(--caption-weight);

        color: var(--grey-3);

        pointer-events: none;

        transition: 0.5s;
    }

    input:valid, 
    input:focus {
        background: var(--white);
    }

    input:valid ~ label, 
    input:focus ~ label {
        padding: 0 10px;

        border-left: 1px solid var(--color-brad);
        border-right: 1px solid var(--color-brad);
        
        font-size: 0.65em;
        letter-spacing: 2px;
        text-transform: uppercase;
        
        color: var(--color-brad);
        background: white;

        transform: translateX(10px) translateY(-5px);
    }
`