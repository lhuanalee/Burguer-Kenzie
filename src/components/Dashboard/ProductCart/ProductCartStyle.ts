import styled from "styled-components";

export const ProductCartStyle = styled.li`
  width: 100%;

  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  background-color: var(--white);

  .product {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    figure {
      width: 70px;
      height: 70px;

      img {
        width: 70px;
        object-fit: cover;
        border-radius: 5px;
        background-color: var(--grey-2);
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;

      p {
        font-size: var(--headline-size);
        font-weight: var(--title-weight-4);
        padding: 0;
        max-width: 8ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--grey-100);
      }

      span {
        font-size: var(--body-size);
        font-weight: var(--caption-weight);
        color: var(--grey-50);
      }
    }
  }

  .buttonCartProduct {
    width: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .buttonCartCounter {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      width: 25px;
      height: 25px;

      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid transparent;
      border-radius: 2px;

      color: var(--white);
      background-color: var(--color-primary);

      cursor: pointer;
    }

    p {
      width: 17px;

      font-size: var(--body-size);
      text-align: center;

      color: var(--grey-100);
    }
  }

  .buttonCartRemove {
    width: max-content;

    border: none;

    color: var(--grey-50);
    background-color: transparent;

    font-size: var(--body-size);
    font-weight: var(--body-weight);

    cursor: pointer;
  }
`;
