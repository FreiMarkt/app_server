// in the member object there should be key encoded
function getMemberById(member) {
  var url = '/rest_services/r/member/getByKey';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(member));
  return JSON.parse(http.responseText);
}