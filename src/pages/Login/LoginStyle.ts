import styled from "styled-components";

export const LoginStyle = styled.div`
  max-width: 100vw;
  min-height: 100vh;

  padding: 40px 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  .banner {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .ellipse {
      width: 50%;

      display: none;
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

      h4 {
        width: 100%;

        font-size: var(--title-size-3);
        font-weight: var(--headline-weight);

        color: var(--color-brad);

        text-align: left;
      }

      .login {
        width: 100%;
      }

      span {
        width: 70%;

        font-size: var(--body-size-1);
        font-weight: var(--caption-weight);

        color: var(--grey-5);
      }

      .register {
        width: 100%;

        color: var(--grey-5);
        background-color: var(--grey-1);

        &:hover {
          background-color: var();

          color: var(--grey-1);
          background-color: var(--grey-5);

          transition: 1s;
        }
      }
    }
  }

  @media (min-width: 540px) {
    .form {
      width: 500px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 62px;

    .banner {
      .ellipse {
        display: flex;
      }
    }

    .form {
      margin-bottom: 0;
    }
  }
`;
