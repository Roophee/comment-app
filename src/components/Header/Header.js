import React from 'react';
import StyledHeader from './styles';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = props => {
    const { themeToggleHandler } = props;
  return (
    <StyledHeader>
      Comments App
    <ThemeSwitcher themeToggleHandler={themeToggleHandler}/>
    </StyledHeader>
  );
};

export default Header;
