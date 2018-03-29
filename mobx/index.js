'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  TodoListModel
} from './store';

import App from './App';

const store = new TodoListModel();

ReactDOM.render(<App store={store} />, document.querySelector('#app'));
