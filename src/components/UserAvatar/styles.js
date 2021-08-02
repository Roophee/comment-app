import styled from 'styled-components';

const StyledUserAvatar = styled.div`
  position: relative;
  min-width: 35px;
  min-height: 35px;
  margin-right: 5px;
  border-radius: 50%;
  border: ${({theme}) => theme.mainBorder};
  background:${({theme}) => theme.avatarBackground};
  color: ${({theme}) => theme.avatarColor};
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
