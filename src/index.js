import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// ***whenever you nest the [signin route] inside of the (root route) -> the parent route is provided the nested route as this.props.children
  // so use {this.props.children} in app.js [aka app component renders its nested child route by using {this.props.children}]

// Provider communicates w/ our "connected" components
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
