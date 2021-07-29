import React, { useCallback } from 'react';
import StyledMoreCommentsBtn from './styles';

const MoreCommentsBtn = props => {
  const { setMoreButtonClicked, setUrlRequest, next } = props;
  const onClickHandler = useCallback(() => {
    setMoreButtonClicked(true);
    setUrlRequest(next);
  }, [next]);

  return (
    <StyledMoreCommentsBtn onClick={onClickHandler} disabled={!next}>
      Show more
    </StyledMoreCommentsBtn>
  );
};

export default MoreCommentsBtn;
