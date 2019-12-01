'use strict';

const initState = {
  counter: 1
};

const reducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD':
      newState.counter++;
      return newState;
  }
  return newState;
};

export default reducer;
