import { Link } from "react-router-dom";

import styled from "styled-components";

export const AnchorStyle = styled(Link)`
    padding: 17px 0;
    
    border: 1px solid transparent;
    border-radius: 8px;

    font-size: var(--headline-size);
    font-weight: var(--body-weight-2);

    color: var(--white);
    background-color: var(--color-brad);

    cursor: pointer;

    &:hover {
        background-color: var(--color-primary);

        transition: 1s;
    }
`