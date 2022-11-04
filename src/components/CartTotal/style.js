import styled from "styled-components";

export const StyleCartTotal = styled.div`
  display: flex;
  padding: 21px 15px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 0 0 5px 5px;
  background-color: var(--grey-0);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > p {
    color: var(--grey-100);
  }

  div > span {
    color: var(--grey-50);
  }

  button {
    padding: 18px;
    font-weight: var(--body-weight-2);
    border: 1px solid transparent;
    border-radius: 8px;
    color: var(--grey-50);
    background-color: var(--grey-20);
    cursor: pointer;
  }
`;
