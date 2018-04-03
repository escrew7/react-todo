var React = require('react');
var {Provider} = require('react-redux')
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');

var actions = require('actions')
var store = require('configureStore').configure()
import firebase from 'app/firebase/'
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid))
    hashHistory.push('/todoApp')
  } else {
    store.dispatch(actions.logout())
    hashHistory.push('/')
  }
})

store.dispatch(actions.startAddTodos())

//load foundation
$(document).foundation();

//load css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
