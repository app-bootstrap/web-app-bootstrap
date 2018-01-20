'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data) {
    localStorage['enough-todo'] = JSON.stringify(data);
  }
};

export default new Vuex.Store({
  state: {
    todos: localStore.get()
  },
  getters: {
    getAll: (state, getters) => {
      return state.todos.filter(item => {
        item.editing = false;
        return item;
      }).reverse();
    },
    getCompleted: (state, getters) => {
      return state.todos.filter(item => item.completed).reverse();
    },
    getActive: (state, getters) => {
      return state.todos.filter(item => !item.completed).reverse();
    }
  },
  mutations: {
    add: (state, data) => {
      state.todos.push({
        id: String(+new Date()),
        completed: false,
        editing: false,
        ...data
      });
      localStore.set(state.todos);
    },
    remove: (state, data) => {
      state.todos = state.todos.filter(item => {
        return item.id !== data.id;
      });
      localStore.set(state.todos);
    },
    complete: (state, data) => {
      state.todos.map(item => {
        if (item.id === data.id) {
          item.completed = true;
        }
        return item;
      });
      localStore.set(state.todos);
    },
    uncomplete: (state, data) => {
      state.todos.map(item => {
        if (item.id === data.id) {
          item.completed = false;
        }
        return item;
      });
      localStore.set(state.todos);
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
      localStore.set(state.todos);
    },
    completedAll: (state, data) => {
      state.todos.map(item => {
        item.completed = true;
        return item;
      });
      localStore.set(state.todos);
    },
    uncompletedAll: (state, data) => {
      state.todos.map(item => {
        item.completed = false;
        return item;
      });
      localStore.set(state.todos);
    },
    clearCompleted(state, data) {
      state.todos = state.todos.filter(item => !item.completed);
      localStore.set(state.todos);
    }
  }
});
