'use strict';

import {
  Container
} from 'flux/utils';

import store from './store';
import View from './view.jsx';

function getStores() {
  return [
    store
  ];
}

function getState() {
  return {};
}

export default Container.createFunctional(View, getStores, getState);
