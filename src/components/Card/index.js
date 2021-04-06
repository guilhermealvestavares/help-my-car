import React from "react";
import { node } from "prop-types";
import { StyledCard } from "./styles";

const propTypes = {
  children: node,
};

const Card = ({ children }, ...other) => {
  return <StyledCard> {children} </StyledCard>;
};

Card.propTypes = propTypes;

export default Card;
