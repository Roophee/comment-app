import React, { useCallback } from 'react';
import StyledPaginationButton from './styles';

const PaginationButton = props => {
  const { handlerCreator, url, disabled } = props;
  const onClickHandler = useCallback(handlerCreator(url), [url]);

  return (
    <StyledPaginationButton disabled={disabled || !url} onClick={onClickHandler}>
      {props.children}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
