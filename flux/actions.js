'use strict';

import dispatcher from './dispatcher';

export const add = text => {
  dispatcher.dispatch({
    type: 'ADD_TODO',
    content: text
  });
};

export const remove = (id) => {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
};

export const compelete = (id) => {
  dispatcher.dispatch({
    type: 'COMPLETE_TODO',
    id
  });
};

export const edit = (id) => {
  dispatcher.dispatch({
    type: 'EDIT_TODO',
    id
  });
};

export const update = (data) => {
  dispatcher.dispatch({
    type: 'UPDATE_TODO',
    id: data.id,
    content: data.value
  });
};

export const updateItem = (data) => {
  dispatcher.dispatch({
    type: 'UPDATE_ITEM_TODO',
    id: data.id,
    content: data.value
  });
};

export const completedAll = () => {
  dispatcher.dispatch({
    type: 'COMPLETE_ALL'
  });
};

export const uncompletedAll = () => {
  dispatcher.dispatch({
    type: 'UNCOMPLETE_ALL'
  });
};

export const clearCompleted = () => {
  dispatcher.dispatch({
    type: 'CLEAR_COMPLETED'
  });
};

export const setVisibilityFilter = (hash) => {
  dispatcher.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    hash
  });
};
