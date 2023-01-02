import styled from "styled-components";

export const ProductCartStyle = styled.li`
  width: 100%;

  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border: 1px solid transparent;
  border-radius: 5px;

  background-color: var(--white);

  .product {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

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
      gap: 15px;

      p {
        font-size: var(--headline-size);
        font-weight: var(--headline-weight);
        padding: 0;
        max-width: 9ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--grey-100);
      }

      span {
        font-size: var(--body-size-1);
        font-weight: var(--body-weight-1);

        color: var(--grey-3);
      }
    }
  }

  .buttonCartProduct {
    width: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .buttonCartCounter {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .buttonIncreaseProduct {
      width: 25px;
      height: 25px;

      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 2px;
    }

    .buttonDecreaseProduct {
      width: 25px;
      height: 25px;

      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 2px;

      background-color: var(--color-negative);

      &:hover {
        background-color: var(--color-negative-hover);
      }
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

    padding: 0;

    border: none;

    font-size: var(--body-size-1);
    font-weight: var(--body-weight-1);

    color: var(--grey-3);
    background-color: transparent;

    cursor: pointer;
  }
`;
