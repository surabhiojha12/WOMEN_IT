var database = firebase.database();
var nm;
var pu;
var ru;
var count;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById('main').style.display = 'block';
    document.getElementById('loginform').style.display = 'none';

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      

      var ref = database.ref('users/' + user.uid);
      ref.on('value', getdata, errdata);
    }
  } else {
    // No user is signed in.

    document.getElementById('main').style.display = 'none';
    document.getElementById('loginform').style.display = 'block';
  }
});

function login() {
  var userEmail = document.getElementById('em').value;
  var userPass = document.getElementById('pd').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert('Error : ' + errorMessage);

      // ...
    });
}
function getdata(data) {
  nm = data.val().name;
  pu = data.val().phone;
  ru = data.val().nationality;
  document.getElementById('nameuser').innerHTML = 'Name: ' + nm;
  document.getElementById('uname').innerHTML = nm;
  document.getElementById('phoneuser').innerHTML = 'Phone: ' + pu;
  document.getElementById('nationalityuser').innerHTML = 'Nationality: ' + ru;
}
function errdata(data) {
  window.alert(data.val());
}
function logout1() {
  firebase.auth().signOut();
}
function review() {
  var rev = document.getElementById('rv_sel').value;
  var revieww = document.getElementById('rev').value;
  var ref = database.ref('rev');
  var data = {
    Place: rev,
    Name: nm,
    rev: revieww
  };
  ref.push(data);
  window.alert('review logged');
}

function seerev() {
  var ref = database.ref('rev');
  ref.on('value', gotData, errData);
}
function gotData(data) {
  var re = data.val();
  Object.keys(re).forEach(function(key) {
    var pl = re[key].Place;
    var rc = re[key].rev;
    var nam = re[key].Name;
    var list = document.getElementById('revlist');
    var firstname = nam + ' :->' + pl + ' : ' + rc;
    console, console.log(firstname);
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    list.appendChild(entry);
  });
}
function errData(err) {
  console.log('error');
  console.log(err);
}
