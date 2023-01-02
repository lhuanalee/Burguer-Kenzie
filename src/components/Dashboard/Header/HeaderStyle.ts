import styled from "styled-components";

export const HeaderStyle = styled.header`
  min-width: 100vw;

  padding: 28px 18px;

  display: flex;
  justify-content: center;

  .header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 150px;
      height: 36px;
    }

    div {
      width: 110px;

      display: flex;
      justify-content: space-evenly;
      gap: 8px;

      button {
        width: 25px;
        height: 25px;

        padding: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 24px;
          height: 24px;

          cursor: pointer;
        }
      }

      /* input {
      width: 90%;
      
      padding: 20px 15px;

      display: flex;

      border: 2px solid var(--color-brad);
      border-radius: 8px;

      position: absolute;
      top: 3px;
      right: 50%;
      left: 50%;

      z-index: 1;
    } */
    }
  }

  @media (min-width: 768px) {
    min-width: 0;
    max-width: 100vw;

    .header {
      width: 560px;
    }
  }

  @media (min-width: 1039px) {
    .header {
      width: 850px;
    }
  }
`;
