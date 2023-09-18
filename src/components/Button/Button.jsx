import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonDiv, StyledButtonLoad } from './Button.styled';

export const Button = ({ title, onLoadMore }) => {
  return (
    <StyledButtonDiv>
      <StyledButtonLoad onClick={onLoadMore}>{title}</StyledButtonLoad>
    </StyledButtonDiv>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onLoadMore: PropTypes.func,
};
