function sinup(){
  var fname=document.getElementById('fnu').value;
  var lname=document.getElementById('lnu').value;
  var phone=document.getElementById('phu').value;
  var city=document.getElementById('cit').value;
  var nat=document.getElementById('nau').value;

var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: fname

}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

firebase.database().ref('users/' + user.uid).set({
  lastname: fname,
  firstname: lname,
  phoneno: phone,
  cit: city,
  nationality: nat
  });


window.alert('success');



}
