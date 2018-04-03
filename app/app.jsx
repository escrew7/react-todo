var React = require('react');
var {Provider} = require('react-redux')
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Login from 'Login'
import TodoApp from 'TodoApp'

var actions = require('actions')
var store = require('configureStore').configure()
var TodoAPI = require('TodoAPI')

store.dispatch(actions.startAddTodos())

//load foundation
$(document).foundation();

//load css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history = {hashHistory}>
      <Route path="/">
        <Route path="TodoApp" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>

  </Provider>,
  document.getElementById('app')
);
