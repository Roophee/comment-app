import React, {useState, useCallback} from 'react';
import {ThemeProvider} from 'styled-components';
import StyledApp from './styles';
import GlobalStyle from '../Common/GlobalStyle';
import Container from '../Container';
import CommentsList from '../CommentsList';
import Header from '../Header'
import { darkTheme, lightTheme } from '../Common/themes'

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggleHandler = useCallback(() => {
        // eslint-disable-next-line no-unused-expressions
        theme === 'light' ? setTheme('dark') : setTheme('light')
    },[theme, setTheme])
    
  return (
    <StyledApp>
    <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
      <GlobalStyle />
            <Container>
                <Header themeToggleHandler={themeToggleHandler}/>
                <CommentsList />
            </Container>
        </ThemeProvider>
    </StyledApp>
  );
}

export default App;
