import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 50%;
  min-height: 90vh;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #0d47a1;

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;

export default StyledContainer;
