// take the Id parameter from URLcd wor 
function getURLParameters() {
  var result = {};
  var url = window.location.href;
  // get rid of hostname
  url = url.split('?')[1];
  // separate all the parameters
  var par = url.split('&');
  
  par.forEach(function(entry) {
    // split every parameter with =
    var temp = entry.split('=');
    // put the key and the value to the hashmap
    result[temp[0]] = temp[1];
  });
  return result; 
}
