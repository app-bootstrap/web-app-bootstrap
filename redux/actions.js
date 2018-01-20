'use strict';

export const add = (content) => ({
  type: 'ADD_TODO',
  content
});

export const remove = (id) => ({
  type: 'DELETE_TODO',
  id
});

export const compelete = (id) => ({
  type: 'COMPLETE_TODO',
  id
});

export const edit = (id) => ({
  type: 'EDIT_TODO',
  id
});

export const update = (data) => ({
  type: 'UPDATE_TODO',
  id: data.id,
  content: data.value
});

export const updateItem = (data) => ({
  type: 'UPDATE_ITEM_TODO',
  id: data.id,
  content: data.value
});

export const completedAll = () => ({
  type: 'COMPLETE_ALL'
});

export const uncompletedAll = () => ({
  type: 'UNCOMPLETE_ALL'
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED'
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
