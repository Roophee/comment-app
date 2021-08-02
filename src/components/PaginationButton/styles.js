import styled from 'styled-components';

const StyledPaginationButton = styled.button`
  padding: 5px;
  min-width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 10px;
  ${({theme}) => theme.boxShadow};
  background: ${({theme}) => theme.buttonBackgroundActive};
  color: ${({theme}) => theme.buttonsColor};
  font-weight: 600;

  &:hover:not([disabled]) {
    background: ${({theme}) => theme.buttonBackgroundHover};
  }
  &:disabled {
    background: ${({theme}) => theme.buttonBackgroundDisabled};
  }
`;

export default StyledPaginationButton;
