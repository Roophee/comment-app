import React from 'react';
import StyledCommentItem, { StyledUserPanel } from './styles';
import UserAvatar from '../UserAvatar';
import TimePanel from '../TimePanel';

const CommentItem = props => {
  const { text, name, created_at } = props.item;
  return (
    <StyledCommentItem>
      <div className="user__header">
        <StyledUserPanel>
          <UserAvatar name={name} />
          <span>{name}</span>
        </StyledUserPanel>
        <TimePanel time={created_at} />
      </div>
      <span>{text}</span>
    </StyledCommentItem>
  );
};

export default CommentItem;
