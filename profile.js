var database = firebase.database();
/*var fnm;
var pu;
var ru;
var count;*/
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var fname = user.firstname;
    var nationality = user.nat;

    // User is signed in.
    var user = firebase.auth().currentUser;
    var ref = database.ref('users/' + user.uid);
    ref.on('value', getdata, errdata);
  } else {
    // No user is signed in.

    window.location.replace('course.html');
  }
});
function logi() {
  firebase.auth().signOut();
}
function logii()
{
  window.location.replace('enter.html');
}
function getdata(data) {
  var fname = data.val().lastname;
  var lname = data.val().firstname;
  var nat = data.val().nationality;
  var cit=data.val().cit;
  var phone=data.val().phoneno;
  var user1 = firebase.auth().currentUser;
  var emm=user1.email;


  document.getElementById('firstnm').innerHTML =fname;
  document.getElementById('lastnm').innerHTML = lname;
  document.getElementById('nato').innerHTML = nat;
  document.getElementById('ci').innerHTML =cit;
  document.getElementById('pno').innerHTML =phone;
  document.getElementById('ema').innerHTML =emm;
}
function errdata(data) {
  window.alert(data.val())
}
function ncourse()
{
var name = document.getElementById('tit').value;
var desc = document.getElementById('sd').value;
var drive = document.getElementById('dlink').value;
var user2 = firebase.auth().currentUser;
firebase.database().ref('portfolio/' + user2.uid).set({
  title: name,
  Description: desc,
  image: drive
  });
  window.alert("success");

}
function face()
{
  var user = firebase.auth().currentUser;
  var ref = database.ref('portfolio/' + user.uid);
  ref.on('value', gtdata, erdata);
}
function gtdata(data)
{ var img1='<img class="img-responsive" style="max-height:150px" src="';
  var img2='">';
  var name=data.val().title;
  var desc=data.val().Description;
  var picture=data.val().image;
  
  document.getElementById('Demo4').innerHTML=img1+picture+img2;
  document.getElementById('nm1').innerHTML=name;
  document.getElementById('nm2').innerHTML=desc;
}
function erdata(data)
{
console.log(data);
}
