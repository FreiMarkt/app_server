function shareHours() {
  var sharedHours = document.getElementById("shereHours").value;
  
  var memberId = "5513e7a3-f99a-48a4-b4ed-a117a2981d0d";// get memberid
  
  var shareHoursObject = {
    "sharedHours":sharedHours,
    "memberId":memberId
  };
  
  var result = sendOffer(offerObject);
  if (result) {
    window.location.href = "request_done.html";
    return true;
  } else {
    alert("Errors in input");
    return false;
  }
}

function registerSharedHours(sharedHours) {
  var http = new XMLHttpRequest();
  http.open("POST", '/rest_services/r/share/shareHours', false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(sharedHours));
  return http.responseText; 
}