import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  min-height: 95vh;
  margin: auto;
  padding: 10px 0;
  background: ${({theme}) => theme.mainBackground};
  border: ${({theme}) => theme.mainBorder};
  border-radius: 10px;
  ${({theme}) => theme.boxShadow};

  & .comments__panel {
    display: flex;
    flex-direction: column;
  }

  & .buttons__panel {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export default StyledContainer;
