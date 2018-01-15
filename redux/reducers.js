'use strict';

import {
  combineReducers
} from 'redux';

const localStore = {
  get() {
    return JSON.parse(localStorage['enough-todo'] || '[]');
  },
  set(data) {
    localStorage['enough-todo'] = JSON.stringify(data);
  }
};

const todos = (state = localStore.get(), action) => {
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
    default:
      return state.map(item => {
        return {
          ...item,
          editing: false
        };
      });
  }
};

const visibilityFilter = (state = location.hash.replace('#/', '') || 'all', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter
});
