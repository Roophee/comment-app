import styled from 'styled-components';

const StyledMoreCommentsBtn = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  align-self: center;
  margin: 10px;
  background: #bbdefb;
  color: #01579b;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #424242;

  &:hover:not([disabled]) {
    background: #81d4fa;
  }
  &:disabled {
    background: #e0e0e0;
    color: #0277bd;
  }
`;
export default StyledMoreCommentsBtn;
