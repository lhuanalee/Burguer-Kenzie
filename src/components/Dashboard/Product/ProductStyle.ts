import styled from "styled-components";

export const ProductStyle = styled.li`
  min-width: 270px;
  height: 338px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 3px solid var(--grey-2);
  border-radius: 5px;

  background-color: var(--white);

  &:hover {
    border: 3px solid var(--color-brad);

    transition: 1s;
  }

  figure {
    width: 100%;

    padding: 2px 15px;

    display: flex;
    justify-content: center;

    background-color: var(--grey-1);
  }

  img {
    width: 160px;
    height: 160px;

    border-radius: 5px 5px 0 0;

    background-color: var(--grey-1);

    object-fit: cover;
  }

  div {
    margin: 16px 22px 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px;

    text-align: initial;

    .productName {
      font-size: var(--title-size-3);
      font-weight: var(--headline-weight);
    }

    .productCategory {
      font-size: var(--body-size-1);
      font-weight: var(--caption-weight);

      color: var(--grey-3);
    }

    .productPrice {
      font-size: var(--title-size-3);
      font-weight: var(--body-weight-2);

      color: var(--color-brad);
    }

    button {
      width: max-content;

      padding: 12px 20px;
    }
  }

  @media (min-width: 768px) {
    margin: 0;

    .productName {
      font-size: var(--headline-size);
    }
  }
`;
