import styled from "styled-components";

const StyledCard = styled.div`
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

export { StyledCard };
