function registerOffer() {
  var category = document.getElementById("dropDown1").innerHTML;
  var categoryName = category.split('<ul>')[0];
  
  var subcategory = document.getElementById("dropDown2").innerHTML;
  var subcategoryName = subcategory.split('<ul>')[0];
  
  var city = document.getElementById("dropDown3").innerHTML;
  var cityName = city.split('<ul>')[0];
  
  var description = document.getElementById('about').value;
  var price = document.getElementById("price").value;
  
  var memberId = "";// get memberid
  
  alert('register offer ' + categoryName + subcategoryName + cityName + description + price);
  return false;
}