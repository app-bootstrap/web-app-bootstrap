'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage['enough-todo'] || '[]')
  },
  getters: {
    getAll: (state, getters) => {
      return state.todos.filter(item => {
        item.editing = false;
        return item;
      });
    },
    getCompleted: (state, getters) => {
      return state.todos.filter(item => item.completed);
    },
    getActive: (state, getters) => {
      return state.todos.filter(item => !item.completed);
    }
  },
  mutations: {
    add: (state, data) => {
      state.todos.push({
        id: String(+new Date()),
        ...data
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    remove: (state, data) => {
      state.todos = state.todos.filter(item => {
        return item.id !== data.id;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    complete: (state, data) => {
      state.todos.map(item => {
        if (item.id === data.id) {
          item.completed = true;
        }
        return item;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    uncomplete: (state, data) => {
      state.todos.map(item => {
        if (item.id === data.id) {
          item.completed = false;
        }
        return item;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    toggleEditing: (state, data) => {
      state.todos.map(item => {
        if (item.id === data.id) {
          item.editing = !item.editing;
        }
        return item;
      });
    },
    update: (state, data) => {
      state.todos = state.todos.map(item => {
        if (item.id === data.id) {
          item.content = data.content;
        }
        return item;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    completedAll: (state, data) => {
      state.todos.map(item => {
        item.completed = true;
        return item;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    },
    uncompletedAll: (state, data) => {
      state.todos.map(item => {
        item.completed = false;
        return item;
      });
      localStorage['enough-todo'] = JSON.stringify(state.todos);
    }
  }
});
