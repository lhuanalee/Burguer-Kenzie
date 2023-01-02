import styled from "styled-components";

export const ProductListStyle = styled.ul`
  width: 90%;

  padding: 16px 0;
  display: flex;
  gap: 20px;

  overflow-x: scroll;

  @media (min-width: 768px) {
    width: 80%;

    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    overflow: hidden;
  }

  @media (min-width: 1039px) {
    width: 1039px;
  }

  @media (min-width: 1200px) {
    width: 1139px;
  }
`;
