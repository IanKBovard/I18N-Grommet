import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import IntlWrapper from './components/IntlWrapper';

ReactDOM.render(
  <IntlWrapper>
    <App />
  </IntlWrapper>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
