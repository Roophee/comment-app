import styled from 'styled-components';

const StyledMoreCommentsBtn = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  align-self: center;
  margin: 10px;
  background: ${({theme}) => theme.buttonBackgroundActive};
  font-weight: 600;
  border-radius: 10px;
  ${({theme}) => theme.boxShadow};
  color: ${({theme}) => theme.buttonsColor};

  &:hover:not([disabled]) {
    background: ${({theme}) => theme.buttonBackgroundHover};
  }
  &:disabled {
    background: ${({theme}) => theme.buttonBackgroundDisabled};
  }
`;
export default StyledMoreCommentsBtn;
