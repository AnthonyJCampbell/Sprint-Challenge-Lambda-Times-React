import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <StyledApp className="App">
      <TopBar />
      <Header />
      <Content />
    </StyledApp>
  );
}

export default App;
