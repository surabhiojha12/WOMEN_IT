var database = firebase.database();
var nm;
var pu;
var ru;
var count;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.

    window.location.replace('course.html');
  }
});
