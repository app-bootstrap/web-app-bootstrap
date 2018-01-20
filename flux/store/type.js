'use strict';

import {
  ReduceStore
} from 'flux/utils';

import dispatcher from '../dispatcher';

class TypeStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return location.hash.replace('#/', '') || 'all';
  }

  reduce(state, action) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        state = action.hash;
        return state;
    }
    return state;
  }
}

export default new TypeStore(dispatcher);

