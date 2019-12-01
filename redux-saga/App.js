'use strict';

import { connect } from 'react-redux';
import React from 'react';

import { addAsync } from './actions';
import '../assets/base.less';

const App = (props) => {
  const onClick = () => {
    props.addAsync();
  };
  return (
    <div>
      <section>
        <header>
          <h1>todos</h1>
        </header>
        <section>
          <label>{props.counter}</label>
        </section>
        <footer>
          <p onClick={() => onClick()}>Double-click to edit a todo</p>
        </footer>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps, { addAsync })(App);
