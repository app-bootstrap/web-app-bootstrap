'use strict';

import {
  Container
} from 'flux/utils';

import todoStore from './store/todo';
import typeStore from './store/type';
import View from './view.jsx';
import * as actions from './actions';

function getStores() {
  return [
    todoStore,
    typeStore
  ];
}

function getState() {
  return {
    todos: todoStore.getState(),
    hash: typeStore.getState(),
    actions: {
      ...actions
    }
  };
}

export default Container.createFunctional(View, getStores, getState);
