import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    font-style: none;
    font-family: 'Inter', sans-serif;
    list-style: none;
}

body {   
    max-width: 100vw;
    max-height: 100vh;

    font-family: 'Inter', sans-serif;
}

.App {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    height: 100%;

    background: linear-gradient(rgba(0, 0, 0, 1.0), rgba(00, 128, 00, 0.8)), url("https://curitibacult.com.br/wp-content/uploads/2022/09/mc-donalds-copa-do-mundo.jpg") no-repeat center;
    background-size: cover;
}


:root {
    /* Colors */
    --color-brad: #27AE60;
    --color-primary: #93D7AF;
    --color-secundary: #EB5757;
    --color-background: rgba(39, 174, 96, 0.1);
    --color-negative: #E60000;
    --grey-1: #F5F5F5;
    --grey-2: #E0E0E0;
    --grey-3: #828282;
    --grey-4: #333333;
    --grey-5: #999999;
    --white: #ffffff;
    --black: #000000;

    /* Font-family */
    --font-family-default: 'Inter', sans-serif;

    /* Font-size */
    --title-size-1: 26px;
    --title-size-2: 22px;
    --title-size-3: 18px;
    --headline-size: 16px;
    --body-size-1: 14px;
    --caption-size: 12px;
    
    /* Font-weight */
    
    --title-weight-1: bold;
    --headline-weight: 700;
    --body-weight-1: 500;
    --body-weight-2: 600;
    --caption-weight: 400;
}
`;
export default GlobalStyle;