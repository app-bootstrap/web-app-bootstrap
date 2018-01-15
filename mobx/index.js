'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

class TodoList {
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

const store = new TodoList();

ReactDOM.render(<App todoStore={store} />, document.querySelector('#app'));
