import React, { useCallback } from 'react';
import StyledPaginationButton from './styles';

const PaginationButton = props => {
  const { urlSetter, url, disabled } = props;
  const onClickHandler = useCallback(event =>{
    event.preventDefault();
    if (url) {
        urlSetter(url);
      }
  }, [url, urlSetter]);

  return (
    <StyledPaginationButton disabled={disabled || !url} onClick={onClickHandler}>
      {props.children}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
