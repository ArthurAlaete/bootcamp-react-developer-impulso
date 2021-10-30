import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundaryComponent from './components/ErrorBoundaryComponent/index';

const main = (
  <ErrorBoundaryComponent>
    <App />
  </ErrorBoundaryComponent>
)


ReactDOM.render(
  main,
  document.getElementById('root')
);
