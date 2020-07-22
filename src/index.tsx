import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { hot } from 'react-hot-loader/root';

const rootEl = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/app/App', () => {
    const NextApp = require('./components/app/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
