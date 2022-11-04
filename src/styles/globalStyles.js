import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

body {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Inter', sans-serif;
}

:root {
    /* Colors */
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secundary: #EB5757;
    --grey-0: #F5F5F5;
    --grey-20: #E0E0E0;
    --grey-50: #828282;
    --grey-100: #333333;
    --white: #ffffff;

    /* Font-family */
    --font-family-default: 'Inter', sans-serif;

    /* Font-size */
    --title-size-1: 26px;
    --title-size-2: 22px;
    --title-size-3: 18px;
    --title-size-4: 14px;
    --headline-size: 16px;
    --body-size-1: 14px;
    --body-size-2: 14px;
    --caption-size: 12px;
    
    /* Font-weight */
    
    --title-weight-1: bold;
    --title-weight-2: bold;
    --title-weight-3: bold;
    --title-weight-4: bold;
    --headline-weight: 700;
    --body-weight-1: 500;
    --body-weight-2: 600;
    --caption-weight: 400;
}
`;
export default GlobalStyles;
