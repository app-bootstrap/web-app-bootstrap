'use strict';

import {
  createStore
} from 'redux';
import {
  Provider
} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.querySelector('#app')
);
