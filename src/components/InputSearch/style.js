import styled from "styled-components";

export const Search = styled.form`
  width: 90%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  background-color: var(--white);
  cursor: pointer;
  &:focus-within {
    border: 2px solid var(--color-primary);
  }

  input {
    padding-left: 10px;
    outline: none;
    border: 1px solid transparent;
    border-radius: 8px;
  }

  input::placeholder {
    color: var(--grey-20);
  }

  button {
    margin: 8px 10px 8px 0;
    padding: 8px 9px;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--white);
    cursor: pointer;
    font-size: var(--body-size-1);
    font-weight: var(--body-weight-1);
  }

  @media (min-width: 768px) {
    width: 304px;
    margin: 0;

    input {
      width: 50%;
    }

    button {
      width: 80px;
      padding: 6px 7px;
    }
  }
`;
