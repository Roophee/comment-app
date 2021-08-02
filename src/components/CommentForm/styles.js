import styled from 'styled-components';

const StyledCommentForm = styled.div`
  width: 90%;
  margin: 5px auto;
  padding: 3px 10px;
  background: ${({theme}) => theme.itemBackground};
  word-wrap: break-word;
  border-radius: 10px;
  ${({theme}) => theme.boxShadow};

  & form {
    display: flex;
    flex-direction: column;
  }

  & input {
    width: 100%;
    background: ${({theme}) => theme.inputBackground};
    font-size: 16px;
    line-height: 1.2;
    border-radius: 5px;
    padding: 5px 0;
  }

  & label {
    font-weight: 600;
  }

  & button {
    width: 50px;
    height: 30px;
    margin-right: 5px;
    border-radius: 10px;
  }

  & #text {
    max-width: 100%;
    min-width: 100%;
    min-height: 150px;
    padding: 5px 0;
    background: ${({theme}) => theme.inputBackground};
    font-size: 16px;
    line-height: 1.2;
    border-radius: 5px;
    font-family: inherit;
  }

  & .form__buttons {
    display: inline-block;
    align-self: flex-end;
    margin: 5px 0;
  }

  & .form__button.send {
    background: ${({theme}) => theme.sendBackground};
    font-weight: 600;
    ${({theme}) => theme.boxShadow};
  }

  & .form__button.clear {
    background: ${({theme}) => theme.clearBackground};
    font-weight: 600;
    ${({theme}) => theme.boxShadow};
`;

export default StyledCommentForm;
