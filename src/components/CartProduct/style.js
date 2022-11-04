import styled from "styled-components";

export const StyleCartProduct = styled.li`
  max-width: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: var(--grey-0);

  .product {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  figure {
    width: 70px;
    height: 70px;
  }

  figure > img {
    width: 70px;
    object-fit: cover;
    border-radius: 5px;
    background-color: var(--grey-20);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }

  div > p {
    font-size: var(--body-size-1);
    font-weight: var(--headline-weight);
    padding: 0;
    max-width: 8ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--grey-100);
  }

  div > span {
    font-size: var(--caption-size);
    font-weight: var(--caption-weight);
    color: var(--grey-50);
  }

  .button__cart__product {
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button__cart__counter {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button__cart__counter > button {
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

  .button__cart__counter > p {
    width: 17px;
    font-size: var(--caption-size);
    text-align: center;
    color: var(--grey-100);
  }

  .button__cart__remove {
    width: max-content;
    border: none;
    background-color: transparent;
    color: var(--grey-50);
    font-size: var(--caption-size);
    font-weight: var(--caption-weight);
    cursor: pointer;
  }
`;
