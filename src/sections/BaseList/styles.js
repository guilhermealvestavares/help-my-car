import styled, { css } from "styled-components";

const Wrapper = styled.section`
  background-color: #f8f8f8;
  padding: 32px 4px;
  margin: 68px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const baseListListVariants = {
  label: css`
    font-weight: bold;
  `,
};

const BaseListList = styled.div(
  ({ variant }) => css`
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #ffffff;
    border-radius: 2px;
    margin: 4px 0;
    padding: 12px 0;
    min-height: 40px;
    ${baseListListVariants[variant]}
  `
);

const BaseListListItem = styled.div`
  margin-right: 26px;
  width: 200px;
`;

export { Wrapper, Title, BaseListList, BaseListListItem };
