function upload()
{
var name = document.getElementById('tit').value;
var level = document.getElementById('lev').value;
var description = document.getElementById('des').value;
var number = document.getElementById('no').value;
var cdescription = document.getElementById('cd').value;
var user2 = firebase.auth().currentUser;
firebase.database().ref('course/' + user2.uid).set({
  title: name,
  level: level,
  description: description,
  number:number,
  cdes:cdescription
  });
  window.alert("success");
  window.location.replace("course.html");

}
