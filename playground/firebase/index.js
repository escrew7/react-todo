
import firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC72-rtOOGIEiSHlG1fI94KaFLMyYCi6oI",
    authDomain: "reesy-todo-app.firebaseapp.com",
    databaseURL: "https://reesy-todo-app.firebaseio.com",
    projectId: "reesy-todo-app",
    storageBucket: "reesy-todo-app.appspot.com",
    messagingSenderId: "60390118392"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'React 2D',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Reesy',
    age: 35
  }
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('new todo', snapshot.key, snapshot.val())
})

todosRef.push({
  text: 'finish video'
})

todosRef.push({
  text: 'get ready'
})
