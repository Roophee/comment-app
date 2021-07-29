import React from 'react';
import StyledUserAvatar from './styles';

const UserAvatar = props => {
    const {name} = props;
  const getLiteralName = new RegExp('^[A-Za-z]');
  return (
    <StyledUserAvatar>
      <span>{getLiteralName.test(name) ? name[0].toUpperCase() : 'U'}</span>
    </StyledUserAvatar>
  );
};

export default UserAvatar;
