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
`;

const GridFlexItem = styled.div`
  width: 380px;
  min-height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px 32px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export { Wrapper, GridFlex, GridFlexItem, Title };
