import React from "react";
import { Wrapper, Title, GridFlex } from "./styles";
import Card from "../../components/Card";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <Title>Lorem ipsum dolor sit amet</Title>
      <GridFlex>
        <Card>Lorem ipsum</Card>
        <Card>Lorem ipsum</Card>
        <Card>Lorem ipsum</Card>
      </GridFlex>
    </Wrapper>
  );
};

export default WhoWeAre;
