import styled from 'styled-components';

const StyledCommentForm = styled.div`
  width: 90%;
  margin: 5px auto;
  padding: 3px 10px;
  background: #eee;
  word-wrap: break-word;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #424242;

  & form {
    display: flex;
    flex-direction: column;
  }

  & input {
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 5px;
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
    background: #388e3c;
    font-weight: 600;
  }

  & .form__button.clear {
    background: #d32f2f;
    font-weight: 600;
  }
`;

export default StyledCommentForm;
