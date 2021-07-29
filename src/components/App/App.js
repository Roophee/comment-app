import React from 'react';
import StyledApp from './styles';
import GlobalStyle from '../Common/GlobalStyle';
import Container from '../Container';
import CommentsList from '../CommentsList';

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Container>
        <CommentsList />
      </Container>
    </StyledApp>
  );
}

export default App;
