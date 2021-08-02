import React from 'react';
import StyledThemeSwitcher from './styles';

const ThemeSwitcher = props => {
  const { themeToggleHandler } = props;
  return (
    <StyledThemeSwitcher>
      <label htmlFor="toggle">
        <input onChange={themeToggleHandler} className="input" id="toggle" type="checkbox"/>
        <div className="toggle-wrapper"><span className="selector"/></div>
      </label>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
