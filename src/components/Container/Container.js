import React from 'react';
import StyledContainer from './styles';

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
