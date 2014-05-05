// POST request to a service that validates confirmation code.
function checkConfirmationCode(confirmationCode) {
  var url = '/rest_services/r/registration/checkCode';
  var http = new XMLHttpRequest();
  http.open("POST", url, false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(confirmationCode);
  // true and false are object therefore string must be parsed
  return JSON.parse(http.responseText);
}