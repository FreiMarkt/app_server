// collects values from the form
function collectValuesForSearch() {
  var categoryName = document.getElementById("dropDown1").innerHTML.split('<ul>')[0];
  var subcategoryName = document.getElementById("dropDown2").innerHTML.split('<ul>')[0];
  var cityName = document.getElementById("dropDown3").innerHTML.split('<ul>')[0];  
  var r1 = document.getElementById('r1').checked;
  var r2 = document.getElementById('r2').checked;
  
  var searchObject = {
    'category': categoryName,
    'subcategory': subcategoryName,
    'city': cityName,
    'services': r1,
    'goods': r2
  };
  
  var searchResults = search(searchObject)
  
  alert("something " + JSON.stringify(searchResults)); 
}

// search object
function search(searchObject) {
  var http = new XMLHttpRequest();
  http.open("POST", '/rest_services/r/search/search', true);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(searchObject));
  return http.responseText; 
}