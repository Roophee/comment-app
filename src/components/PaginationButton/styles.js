import styled from 'styled-components';

const StyledPaginationButton = styled.button`
  padding: 5px;
  min-width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #424242;
  background: #bbdefb;
  color: #01579b;
  font-weight: 600;

  &:hover:not([disabled]) {
    background: #81d4fa;
  }
  &:disabled {
    background: #e0e0e0;
    color: #0277bd;
  }
`;

export default StyledPaginationButton;
