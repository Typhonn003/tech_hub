import { GlobalStyle } from './styles/global';
import { Typography } from './styles/typography';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Typography />
    <App />
  </React.StrictMode>
);