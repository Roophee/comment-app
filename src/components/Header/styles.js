import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  height: 50px;
  font-size: 28px;
  align-self: center;
  margin: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 42px;
  
  @media(max-width: 500px) {

    font-size: 28px;
  }
`;
export default StyledHeader;
