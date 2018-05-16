import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route, browserHistory } from 'react-router-dom';
import promises from 'redux-promise';
import reducers from './reducers';
import Home from './components/home.jsx';
import UserProfile from './components/userProfile.jsx';

const createStoreWithMiddleware = applyMiddleware(promises)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container'),
);
