import styled from 'styled-components';

const StyledUserAvatar = styled.div`
  position: relative;
  min-width: 35px;
  min-height: 35px;
  margin-right: 5px;
  border-radius: 50%;
  border: 3px solid #0d47a1;
  background: #2196f3;
  color: #eee;
  font-size: 26px;
  font-weight: 400;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 5px;
  }
`;
export default StyledUserAvatar;
