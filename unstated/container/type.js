'use strict';

import { Container } from 'unstated';

const getHashState = () => {
  return location.hash.replace('#/', '') || 'all';
};

class TypeContainer extends Container {
  state = {
    type: getHashState(),
  };

  constructor() {
    super();

    window.onhashchange = () => {
      const type = getHashState();
      this.setState({
        type,
      });
    };
  }

  setVisibilityFilter(type) {
    this.setState({
      type,
    });
  }
}

export default TypeContainer;