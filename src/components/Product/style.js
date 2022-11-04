import styled from "styled-components";

export const StyleProduct = styled.li`
  min-width: 280px;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  justify-content: flex-start;

  figure {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2px 15px;
    background-color: var(--grey-0);
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    background-color: var(--grey-0);
  }

  div {
    margin: 22px 22px 0;
    display: flex;
    justify-content: flex-start;
    text-align: initial;
    flex-direction: column;
    gap: 14px;
  }

  .product__name {
    font-size: var(--title-size-3);
    font-weight: var(--title-weight-3);
  }

  .product__category {
    font-size: var(--caption-size);
    font-weight: var(--caption-weight);
    color: var(--grey-100);
  }

  .product__price {
    font-size: var(--body-size-2);
    font-weight: var(--body-weight-2);
    color: var(--color-primary);
  }

  button {
    width: max-content;
    margin: 8px 10px 8px 0;
    padding: 12px 20px;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--white);
    cursor: pointer;
    font-size: var(--body-size-1);
    font-weight: var(--body-weight-1);
  }

  @media (min-width: 768px) {
    min-width: 80%;
    margin: 0;

    .product__name {
      font-size: var(--headline-size);
    }
  }

  @media (min-width: 850px) {
    transition: 2s;
    min-width: 220px;
    margin: 0;
  }

  @media (min-width: 1000px) {
    transition: 2s;
    min-width: 260px;
    margin: 0;
  }

  @media (min-width: 1200px) {
    transition: 2s;
    min-width: 270px;
    margin: 0;
  }

  @media (min-width: 1200px) {
    transition: 2s;
    min-width: 250px;
    margin: 0;
  }
`;
