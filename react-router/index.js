import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';

import Home from './Home.jsx';
import First from './First.jsx';
import Second from './Second.jsx';

const hashHistory = createHashHistory({
  basename: '/',
});
const browserHistory = createBrowserHistory({
  basename: '/react-router',
});

const history = hashHistory || browserHistory;

const app = (
  <Router history={history}>
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/first'} component={First} />
      <Route exact path={'/second'} component={Second} />
    </Switch>
  </Router>
);

const container = document.querySelector('#app');

ReactDOM.render(app, container);
