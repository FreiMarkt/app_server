function registerOffer() {
  var categoryName = document.getElementById("dropDown1").innerHTML.split('<ul>')[0];
  
  var subcategoryName = document.getElementById("dropDown2").innerHTML.split('<ul>')[0];
  
  var cityName = document.getElementById("dropDown3").innerHTML.split('<ul>')[0];
  
  var description = document.getElementById('about').value;
  var price = document.getElementById("price").value;
  
  var memberId = "5513e7a3-f99a-48a4-b4ed-a117a2981d0d";// get memberid
  
  var offerObject = {
    "goods":document.getElementById('r2').checked,
    "services":document.getElementById('r1').checked,
    "category":categoryName,
    "subcategory":subcategoryName,
    "city":cityName,
    "description":description,
    "price":price,
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

function sendOffer(offerObject) {
  var http = new XMLHttpRequest();
  http.open("POST", '/rest_services/r/offer/makeOffer', false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(offerObject));
  return http.responseText; 
}

function getOffers(searchObject) {
  var http = new XMLHttpRequest();
  http.open("GET", '/rest_services/r/offer/getAllOffers', false);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(searchObject));
  return JSON.parse(http.responseText);
}