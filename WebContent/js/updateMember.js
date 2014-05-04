function updateMember(member) {
  var url = '/rest_services/r/member/updateMember';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(member));
  return JSON.parse(http.responseText);
}