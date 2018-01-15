'use strict';

import {
  Dispatcher
} from 'flux';
import {
  ReduceStore
} from 'flux/utils';

class TodoEditStore extends ReduceStore {
  constructor() {
    super(new Dispatcher());
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    return state;
  }
}

export default new TodoEditStore();
