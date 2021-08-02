import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  min-height: 95vh;
  margin: auto;
  padding: 10px 0;
  background: #1565c0;
  border: 3px solid #0d47a1;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px #424242;

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
