'use strict';

import { Container } from 'unstated';

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data) {
    localStorage['enough-todo'] = JSON.stringify(data);
  }
};

class TodoContainer extends Container {
  state = {
    todos: localStore.get(),
  };

  add(data) {
    var todos = [
      ...this.state.todos,
      {
        id: String(+new Date()),
        completed: false,
        content: data,
        editing: false
      }
    ];
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  remove(id) {
    var todos = this.state.todos.filter(item => item.id !== id);
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  edit(id) {
    var todos = this.state.todos.map(item =>
      item.id === id
        ? {
          ...item,
          editing: true
        }
        : item
    );
    this.setState({
      todos,
    });
  }

  compelete(id) {
    var todos = this.state.todos.map(item =>
      item.id === id
        ? {
          ...item,
          completed: !item.completed
        }
        : item
    );
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  completedAll() {
    var todos = this.state.todos.map(item => {
      return {
        ...item,
        completed: true
      };
    });
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  uncompletedAll() {
    var todos = this.state.todos.map(item => {
      return {
        ...item,
        completed: false
      };
    });
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  clearCompleted() {
    var todos = this.state.todos.filter(item => !item.completed);
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  update(id, content) {
    var todos = this.state.todos.map(item =>
      item.id === id
        ? {
          ...item,
          content: content,
          editing: false
        }
        : item
    );
    localStore.set(todos);
    this.setState({
      todos,
    });
  }

  updateItem(id, content) {
    var todos = this.state.todos.map(item =>
      item.id === id
        ? {
          ...item,
          content: content
        }
        : item
    );
    this.setState({
      todos,
    });
  }
}

export default TodoContainer;
