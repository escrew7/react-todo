
import firebase from 'firebase'

try {
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
} catch (e) {

}


export var firebaseRef = firebase.database().ref()
export default firebase
