/**
 * Factory method to produce member with default values.
 */
function getEmptyMember() {
  var member = {
    "firstname": "unknown",
	"lastname": "unknown",
	"ppassword": "unknown",
	"age": 0,
	"gender": 'male',
	"address": "unknown",
	"city": "unknowm",
	"country": "unknown",
	"email": "unknown",
	"phonenumber": "unknown",
	"paymentStatus": true,
	"fiftyfivemember": true,
	"postalcode": "unknown",
	"birthday": "1970-01-01",
	"roleId": 3
    };
  return member;
}

function setValues(member, params) {
  member["firstname"] = params["name"];
  member["lastname"] = params["lastname"];
  member["phonenumber"] = params["phonenumber"];
  member["ppassword"] = params["password"];
  member["address"] = params["residence"];
  member["email"] = document.getElementById("Email").value;
  return member;
}

function completeRegistration() {
  var result = {};
  var url = window.location.href;
  url = url.split('?')[1];
  var params = url.split("&");
  params.forEach(function(entry) {
    var temp = entry.split('=');
    result[temp[0]] = temp[1];
  });
  var member = getEmptyMember();
  var updatedMember = setValues(member, result);
  insertNewMember(updatedMember);
//  alert('inside the method ' + JSON.stringify(updatedMember));
}


/*
 * function that sends JSON to the REST webservice that knows how to save it to
 * the database.
 * 
 * This script is subject to change, because most of the fields should lose 
 * their restriction on being NON NULL.
 */
function insertNewMember(member) {
	var url = '/rest_services/r/member/save';
    var http = new XMLHttpRequest();
	http.open("POST", url, false);
	http.setRequestHeader('Content-Type', 'application/json');
	http.send(JSON.stringify(member));
	return true;
}