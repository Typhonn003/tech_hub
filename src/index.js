import { GlobalStyle } from './styles/global';
import { Typography } from './styles/typography';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
      <GlobalStyle />
      <Typography />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);