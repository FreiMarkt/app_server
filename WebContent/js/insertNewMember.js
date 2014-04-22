/*
 * function that sends JSON to the REST webservice that knows how to save it to
 * the database.
 * 
 * This script is subject to change, because most of the fields should lose 
 * their restriction on being NON NULL.
 */
function insertNewMember() {
	var url = '/rest_services/moo/member/save';
	
	var jsonString = '{\"firstname\":\"Dainius\",' +
	'\"lastname\":\"Jocas\",'+
	'\"username\":\"dainiusjocas\",'+
	'\"ppassword\":\"password\",'+
	'\"age\":25,'+
	'\"gender\":true,' + 
	'\"address\":\"vilnius,lietuva\",'+
	'\"city\":\"Vilnius\",'+
	'\"country\":\"Lithuania\",' + 
	'\"email\":\"dainius.jocas@gmail.com\",'+
	'\"phonenumber\":\"+37068600597\",'+
	'\"paymentStatus\":true,'+
	'\"fiftyfivemember\":true,'+
	'\"postalcode\":\"86430\",'+
	'\"birthday\":\"3889-05-11\",'+
	'\"roleId\":3,'+
	'\"memberID\":\"' + Math.floor((Math.random()*10000)+1) + '\"}';
	
	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	http.setRequestHeader('Content-Type', 'application/json');
	http.send(jsonString);
	return true;
}