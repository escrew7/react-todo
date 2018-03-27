var React = require('react');
var {Provider} = require('react-redux')
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

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
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
