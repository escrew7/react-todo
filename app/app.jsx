var React = require('react');
var {Provider} = require('react-redux')
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

var actions = require('actions')
var store = require('configureStore').configure()
var TodoAPI = require('TodoAPI')

store.subscribe(() => {
  var state = store.getState()
  console.log('new state', state)
  TodoAPI.setTodos(state.todos)
})

var initialTodos = TodoAPI.getTodos()
store.dispatch(actions.addTodos(initialTodos))

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
