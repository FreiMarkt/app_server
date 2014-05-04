function logIn() {
  var email = document.getElementById('superlogin').value;
  var password = document.getElementById('password').value;
  
  var member = {
        "email" : document.getElementById('superlogin').value,
        "ppassword" : document.getElementById('password').value
  };
  
  var isSuccess = loginMember(member);
  
  if (isSuccess) {
     return true; //alert('success');
  } else {
    alert('bad login or/and password');
    return false;
  }
}

// function that actualy saves the member
function loginMember(member) {
  var request = new XMLHttpRequest();
  request.open("POST", "/rest_services/r/member/login", false);
  request.setRequestHeader("Content-type","application/json");
  request.send(JSON.stringify(member));
  
  return JSON.parse(request.responseText);
}