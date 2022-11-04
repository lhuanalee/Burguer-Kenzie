import styled from "styled-components";

export const StyleProductList = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  padding: 16px;

  @media (min-width: 768px) {
    width: 58%;
    margin: 0;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: flex-start;
  }

  @media (min-width: 850px) {
    width: 60%;
    margin: 0;
    flex-wrap: wrap;
  }

  @media (min-width: 1000px) {
    width: 60%;
    margin: 0;
    flex-wrap: wrap;
  }

  @media (min-width: 1200px) {
    width: 72%;
    margin: 0;
    flex-wrap: wrap;
  }

  @media (min-width: 1250px) {
    width: 68%;
    flex-wrap: wrap;
  }

  @media (min-width: 1300px) {
    width: 50%;
    flex-wrap: wrap;
  }

  @media (min-width: 1400px) {
    width: 60%;
    flex-wrap: wrap;
  }
`;
