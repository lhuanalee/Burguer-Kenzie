import styled from "styled-components";

export const RegisterStyle = styled.div`
    max-width: 100vw;
    min-height: 100vh;

    padding: 40px 18px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .banner {
        display: none;
        flex-direction: column;
        gap: 30px;

        .ellipse {
            width: 50%;
        }
    }

    .form {
        width: 100%;

        margin-bottom: 40px;

        border: 2px solid var(--grey-1);
        border-radius: 5px;
        box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

        background-color: var(--white);

        form {
            width: 100%;
    
            padding: 18px;
    
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            text-align: center;

            .registerHeader {
                width: 100%;

                display: flex;
                justify-content: space-between;

                h4 {
                    width: 0;

                    font-size: var(--title-size-3);
                    font-weight: var(--headline-weight);

                    color: var(--color-brad);
                }

                a {
                    font-size: var(--body-size-1);
                    font-weight: var(--body-weight-1);

                    text-decoration: underline;

                    color: var(--grey-3);
                }
            }

            button {
                width: 100%;
            }
        }
    }

@media (min-width: 540px) {
    .form {
        width: 500px;
    }
}

@media (min-width: 768px) {
    flex-direction: row;
    gap: 62px;

    .banner {   
        display: flex;
    }

    .form {
        margin-bottom: 0;
    }
}
`