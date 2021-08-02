import styled from 'styled-components';

const StyledCommentItem = styled.div`
  width: 90%;
  margin: 5px auto;
  padding: 3px 10px;
  background: ${({theme}) => theme.itemBackground};
  word-wrap: break-word;
  border-radius: 10px;
  ${({theme}) => theme.boxShadow};

  & .user__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: end;
    font-weight: 700;
  }

  & > span {
    padding-left: 50px;
  }
`;

export const StyledUserPanel = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  word-break: break-word;
`;

export default StyledCommentItem;
