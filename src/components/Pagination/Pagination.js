import React from 'react';
import StyledPaginationPanel from './styles';
import PaginationButton from '../PaginationButton';

const Pagination = props => {
  const { first_page_url, last_page_url, next_page_url, prev_page_url, current_page, last_page } =
    props.apiData;
  const { urlSetter } = props;

  const onClickHandlerCreator = url => {
    if (url) {
      return event => {
        event.preventDefault();
        urlSetter(url);
      };
    }
    return event => event.preventDefault();
  };

  return (
    <StyledPaginationPanel>
      <PaginationButton
        url={first_page_url}
        disabled={current_page === 1}
        handlerCreator={onClickHandlerCreator}>
        First
      </PaginationButton>
      <PaginationButton url={prev_page_url} handlerCreator={onClickHandlerCreator}>
        Prev
      </PaginationButton>
      <PaginationButton disabled url={null} handlerCreator={onClickHandlerCreator}>
        {current_page} from {last_page}
      </PaginationButton>
      <PaginationButton url={next_page_url} handlerCreator={onClickHandlerCreator}>
        Next
      </PaginationButton>
      <PaginationButton
        url={last_page_url}
        handlerCreator={onClickHandlerCreator}
        disabled={current_page === last_page}>
        Last
      </PaginationButton>
    </StyledPaginationPanel>
  );
};

export default Pagination;
