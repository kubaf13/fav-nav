import React from 'react';
// import styled from 'styled-components';
import Button from 'components/Button/Button';
import GlobalStyles from 'components/theme/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyles></GlobalStyles>
    <h1>Czesc Kuba, co tam</h1>
    <Button>Save / Close</Button>
    <Button secondary>remove</Button>
  </div>
);

export default App;
