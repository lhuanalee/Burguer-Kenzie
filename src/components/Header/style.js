import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background-color: var(--grey-0);

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  @media (min-width: 768px) {
    padding: 10px 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
      width: 93%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
