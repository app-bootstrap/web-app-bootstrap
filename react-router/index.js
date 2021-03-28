import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';

import Home from './Home.jsx';
import First from './First.jsx';
import Second from './Second.jsx';
import Third from './Third.jsx';

const hashHistory = createHashHistory({
  basename: '/',
});
const browserHistory = createBrowserHistory({
  basename: '/react-router',
});

const history = hashHistory || browserHistory;
const loggedIn = true;

const app = (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/home" /> : <div />}
      </Route>
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/first'} component={First} />
      <Route exact path={'/second'} component={Second} />
    </Switch>
    <Route exact path={'/third'} children={Third} />
  </Router>
);

const container = document.querySelector('#app');

ReactDOM.render(app, container);
