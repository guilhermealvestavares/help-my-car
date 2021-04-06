import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  background-color: #f8f8f8;
  padding: 32px 0;
  margin: 68px 0;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const GridFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export { Wrapper, GridFlex, Title };
