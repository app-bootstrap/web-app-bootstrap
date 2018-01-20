'use strict';

import {
  ReduceStore
} from 'flux/utils';

import dispatcher from '../dispatcher';

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data) {
    localStorage['enough-todo'] = JSON.stringify(data);
  }
};

class TodoStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return localStore.get();
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        var res = [
          ...state,
          {
            id: String(+new Date()),
            completed: false,
            content: action.content,
            editing: false
          }
        ];
        localStore.set(res);
        return res;
      case 'DELETE_TODO':
        var res = state.filter(item => item.id !== action.id);
        localStore.set(res);
        return res;
      case 'COMPLETE_TODO':
        var res = state.map(item =>
          item.id === action.id
            ? {
              ...item,
              completed: !item.completed
            }
            : item
        );
        localStore.set(res);
        return res;
      case 'EDIT_TODO':
        var res = state.map(item =>
          item.id === action.id
            ? {
              ...item,
              editing: true
            }
            : item
        );
        return res;
      case 'UPDATE_TODO':
        var res = state.map(item =>
          item.id === action.id
            ? {
              ...item,
              content: action.content,
              editing: false
            }
            : item
        );
        localStore.set(res);
        return res;
      case 'UPDATE_ITEM_TODO':
        var res = state.map(item =>
          item.id === action.id
            ? {
              ...item,
              content: action.content
            }
            : item
        );
        return res;
      case 'COMPLETE_ALL':
        var res = state.map(item => {
          return {
            ...item,
            completed: true
          };
        });
        localStore.set(res);
        return res;
      case 'UNCOMPLETE_ALL':
        var res = state.map(item => {
          return {
            ...item,
            completed: false
          };
        });
        localStore.set(res);
        return res;
      case 'CLEAR_COMPLETED':
        var res = state.filter(item => !item.completed);
        localStore.set(res);
        return res;
    }
    return state;
  }
}

export default new TodoStore(dispatcher);
