var database=firebase.database();
function addd()
{var ref=database.ref('jobs');
var country=document.getElementById('con').value;
var desc=document.getElementById('jdesc').value;
var city=document.getElementById('city').value;
var title=document.getElementById('title').value;
var user = firebase.auth().currentUser;
var nameus=user.displayName;

var data=
{
  name:nameus,
  country:country,
  city: city,
  title: title,
  description: desc
}
ref.push(data);

window.alert("successfull");
}
function search()
{

  var ref=database.ref('jobs');
  ref.on('value',getdata,errdata);
}
function getdata(data)
{
console.log(data.val());
var jobs=data.val();
var keys=Object.keys(jobs);
var element1='<div class="w3-section"><label>Job Posted By</label><div class="w3-input w3-border w3-hover-border-black w3-white" style="width:100%;" ><p>';
var element2='</p></div></div><div class="w3-section"><label>Country</label><div class="w3-input w3-border w3-hover-border-black w3-white" style="width:100%;" ><p>';
var element3='</p></div></div><div class="w3-section"><label>City</label><div class="w3-input w3-border w3-hover-border-black w3-white" style="width:100%;" ><p>';
var element4='</p></div></div><div class="w3-section"><label>Job Title</label><div class="w3-input w3-border w3-hover-border-black w3-white" style="width:100%;" ><p>';
var element5='</p></div></div><div class="w3-section"><label>Job Description</label><div class="w3-input w3-border w3-hover-border-black w3-white" style="width:100%;" ><p>';
var element6='</p></div></div><hr>';
var mainele='';
var flag=0;
  var check=document.getElementById('spane').value;
for(var i=0;i<keys.length;i++)
{
  var k=keys[i];
  var count=jobs[k].country;
  var cityy=jobs[k].city;
  var tit=jobs[k].title;
  var de=jobs[k].description;
  var na=jobs[k].name;

  if(check==cityy)

{  var mainele=mainele+element1+na+element2+count+element3+cityy+element4+tit+element5+de+element6;
document.getElementById('sam').innerHTML=mainele;
flag=1;}

}
if(flag==0)
window.alert("no record found");
}
function errdata(data)
{

  console.log(data);
}
