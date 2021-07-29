import React from 'react';
import StyledTimePanel from './styles';

const TimePanel = props => {
  const date = new Date(props.time);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit' };
  return (
    <StyledTimePanel>
      {date.toLocaleDateString('ua-UA', dateOptions)}{' '}
      {date.toLocaleTimeString('ua-UA', timeOptions)}
    </StyledTimePanel>
  );
};

export default TimePanel;
