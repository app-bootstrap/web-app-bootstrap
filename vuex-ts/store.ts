'use strict';

import Vuex, {
  GetterTree,
  MutationTree
} from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data: object) {
    localStorage['enough-todo'] = JSON.stringify(data);
  },
};

const state: Todo.State = {
  todos: localStore.get(),
};

const getters: GetterTree<any, any> = {
  getAll(state): Todo.Item [] {
    return state.todos.filter((item: Todo.Item) => {
      item.editing = false;
      return item;
    }).reverse();
  },
  getCompleted(state): Todo.Item [] {
    return state.todos.filter((item: Todo.Item) => item.completed).reverse();
  },
  getActive(state): Todo.Item [] {
    return state.todos.filter((item: Todo.Item) => !item.completed).reverse();
  },
};

const mutations: MutationTree<any> = {
  add: (state: Todo.State, data) => {
    state.todos.push({
      id: String(+new Date()),
      completed: false,
      editing: false,
      ...data,
    });
    localStore.set(state.todos);
  },
  remove: (state: Todo.State, data) => {
    state.todos = state.todos.filter((item: Todo.Item) => {
      return item.id !== data.id;
    });
    localStore.set(state.todos);
  },
  complete: (state: Todo.State, data) => {
    state.todos.map((item: Todo.Item) => {
      if (item.id === data.id) {
        item.completed = true;
      }
      return item;
    });
    localStore.set(state.todos);
  },
  uncomplete: (state: Todo.State, data) => {
    state.todos.map((item: Todo.Item) => {
      if (item.id === data.id) {
        item.completed = false;
      }
      return item;
    });
    localStore.set(state.todos);
  },
  toggleEditing: (state: Todo.State, data) => {
    state.todos.map((item: Todo.Item) => {
      if (item.id === data.id) {
        item.editing = !item.editing;
      }
      return item;
    });
  },
  update: (state: Todo.State, data) => {
    state.todos = state.todos.map((item: Todo.Item) => {
      if (item.id === data.id) {
        item.content = data.content;
      }
      return item;
    });
    localStore.set(state.todos);
  },
  completedAll: (state: Todo.State, data) => {
    state.todos.map((item: Todo.Item) => {
      item.completed = true;
      return item;
    });
    localStore.set(state.todos);
  },
  uncompletedAll: (state: Todo.State, data) => {
    state.todos.map((item: Todo.Item) => {
      item.completed = false;
      return item;
    });
    localStore.set(state.todos);
  },
  clearCompleted(state: Todo.State, data) {
    state.todos = state.todos.filter((item: Todo.Item) => !item.completed);
    localStore.set(state.todos);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
