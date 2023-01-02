import styled from "styled-components";

export const CartStyle = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;

  margin: auto;

  backdrop-filter: blur(10px);

  position: relative;

  position: absolute;
  top: 0;

  section {
    width: 90%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 5px;

    background-color: var(--grey-1);

    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  .shoppingCart {
    width: 100%;

    padding: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 5px 5px 0px 0px;

    background-color: var(--color-primary);

    p {
      font-size: var(--headline-size);
      font-weight: var(--headline-weight);

      color: var(--white);
    }

    button {
      padding: 0;
      background: none;
    }
  }

  .emptyCart {
    width: 100%;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    border: 1px solid transparent;
    border-radius: 0 0 5px 5px;

    background-color: var(--grey-0);

    ul {
      width: 100%;
      height: 350px;

      padding: 20px 5px;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;

      background-color: var(--grey-0);

      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 20px;

        background: var(--grey-0);
      }

      &::-webkit-scrollbar-thumb {
        border: 3px solid var(--color-primary);
        border-radius: 20px;

        background-color: var(--white);
      }
    }

    hr {
      width: 90%;
      height: 2px;

      margin: 0 auto;

      background-color: var(--grey-20);
    }

    .emptyBag {
      margin-top: 50px;
      padding: 0;

      font-size: var(--title-size-3);
      font-weight: var(--headline-weight);

      color: var(--grey-100);
    }

    span {
      font-size: var(--title-size-4);
      font-weight: var(--caption-weight);

      color: var(--grey-50);
    }

    img {
      width: 15rem;
      border-radius: 5px;
    }
  }

  @media (min-width: 370px) {
    margin: 0 auto;

    section {
      width: 333px;
    }

    .shoppingCart {
      width: 333px;
    }

    .emptyCart {
      width: 333px;
    }
  }
`;
