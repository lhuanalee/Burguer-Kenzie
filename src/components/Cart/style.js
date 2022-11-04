import styled from "styled-components";

export const StyleCart = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 16px;

  .shoppin__cart {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);
  }

  .shoppin__cart > p {
    padding: 18px;
    color: var(--white);
    font-size: var(--headline-size);
    font-weight: var(--headline-weight);
  }

  ul {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--grey-0);
  }

  div {
    width: 100%;
    background-color: var(--grey-0);
  }

  .divider {
    margin: 0 auto;
    width: 90%;
    height: 2px;
    background-color: var(--grey-20);
  }

  .empty__cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 0 0 5px 5px;
    background-color: var(--grey-0);
  }

  .empty__cart > p {
    margin-top: 50px;
    padding: 0;
    font-size: var(--title-size-3);
    font-weight: var(--headline-weight);
    color: var(--grey-100);
  }

  .empty__cart > span {
    font-size: var(--title-size-4);
    font-weight: var(--caption-weight);
    color: var(--grey-50);
  }

  .empty__cart > img {
    width: 70%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 523px) {
    margin: 0 auto;
    width: 520px;
    height: 550px;
    padding: 16px 16px 16px 0;
  }

  @media (min-width: 768px) {
    margin: 0;
    width: 320px;
    height: 500px;
    padding: 16px 16px 16px 0;
  }
`;
