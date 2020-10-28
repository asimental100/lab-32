import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ColorProvider } from './context/ColorContext';

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root')
);
