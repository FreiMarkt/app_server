function recoverPassword() {
  "use strict";
  var credencials = {
    'email': document.getElementById("email").value,
    'phoneNumber' : document.getElementById("phoneNumber").value
  },
    http, result;
  
  http = new XMLHttpRequest();
  http.open("POST", '/rest_services/r/recovery/recoverPassword', false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(credencials));
  
  result = JSON.parse(http.responseText);
  
  if (true === result) {
    alert("Success, shortly you'll receive reset link");
    window.location.href = "log_in.html";
    // go to login page
  } else {
    alert('No such credentials in the database.');
    return false;
  }
  return false;
}