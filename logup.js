function sin() {
  var email = document.getElementById('eu').value;

  var password = document.getElementById('pu').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
    window.location.replace('profile.html');
}
