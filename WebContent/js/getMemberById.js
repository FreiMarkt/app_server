// in the member object there should be key encoded
function getMemberById(member) {
  var url = '/rest_services/r/member/getByKey';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(member));
  return JSON.parse(http.responseText);
}

// in the member object there should be key encoded
function getMemberByUUID(member) {
  var url = '/rest_services/r/member/getById';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(member));
  return JSON.parse(http.responseText);
}


function updateMember(member) {
  var url = '/rest_services/r/member/realUpdate';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(member));
  return JSON.parse(http.responseText);
}