import styled from "styled-components";

export const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  img {
    width: 229px;
    height: 35px;
  }

  .slogan {
    padding: 14px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 19px;

    border: 1px solid var(--grey-2);
    border-radius: 5px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

    background-color: var(--white);

    figure {
      min-width: 60px;
      height: 60px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid transparent;
      border-radius: 5px;

      background-color: var(--color-background);

      img {
        width: 24px;
        height: 24px;
      }
    }

    p {
      font-size: var(--body-size-1);
      font-weight: var(--caption-weight);

      color: var(--grey-3);

      span {
        font-weight: var(--body-weight-2);

        color: var(--color-brad);
      }
    }
  }

  @media (min-width: 540px) {
    .slogan {
      width: 500px;
    }
  }

  @media (min-width: 768px) {
    .slogan {
      width: 354px;
    }
  }
`;
