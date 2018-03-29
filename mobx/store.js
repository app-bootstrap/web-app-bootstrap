'use strict';

import {
  observable,
  computed,
  action
} from 'mobx';

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data) {
    localStorage['enough-todo'] = JSON.stringify(data);
  }
};

class TodoModel {
  id = String(+new Date());
  @observable content;
  @observable completed = false;

  constructor(content) {
    this.content = content;
  }
}

export class TodoListModel {
  @observable todos = localStore.get();
  @observable type = location.hash.replace('#/', '') || 'all';

  @computed
  get allTodo() {
    return this.todos.reverse();
  }

  @computed
  get activeTodo() {
    return this.todos.filter(t => !t.completed);
  }

  @computed
  get completedTodo() {
    return this.todos.filter(t => t.completed);
  }

  @action
  addTodo(content) {
    this.todos.push(new TodoModel(content));
    localStore.set(this.todos);
  }

  @action
  update({ id, value }) {
    this.todos = this.todos.map(item =>
      item.id === id
        ? {
          ...item,
          content: value,
          editing: false
        }
        : item
    );
    localStore.set(this.todos);
  }

  @action
  updateItem({ id, value }) {
    this.todos = this.todos.map(item =>
      item.id === id
        ? {
          ...item,
          content: value,
          editing: true
        }
        : item
    );
    localStore.set(this.todos);
  }

  @action
  removeTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id);
    localStore.set(this.todos);
  }

  @action
  edit(id) {
    this.todos = this.todos.map(item =>
      item.id === id
        ? {
          ...item,
          editing: true
        }
        : item
    );
  }

  @action
  compelete(id) {
    this.todos = this.todos.map(item =>
      item.id === id
        ? {
          ...item,
          completed: !item.completed
        }
        : item
    );
    localStore.set(this.todos);
  }

  @action
  completedAll() {
    this.todos = this.todos.map(item => {
      return {
        ...item,
        completed: true
      };
    });
    localStore.set(this.todos);
  }

  @action
  uncompletedAll() {
    this.todos = this.todos.map(item => {
      return {
        ...item,
        completed: false
      };
    });
    localStore.set(this.todos);
  }

  @action
  clearCompleted() {
    this.todos = this.todos.filter(item => !item.completed);
    localStore.set(this.todos);
  }

  @action
  setVisibilityFilter(type) {
    this.type = type;
  }
}
