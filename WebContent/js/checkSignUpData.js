// checks for page 1stem.html
function checkSignUpDataStep1() {
  var password = document.getElementById("password").value;
  var repeatedPassword = document.getElementById("repeatpassword").value;
  // are password equal
  if (password != repeatedPassword) {
    alert('Passwords don\'t match.');
    return false;
  } 
  // are password at least 5 characters long
  if (password.length < 5) {
    alert("Password is too short. It should have at least 5 characters.");
    return false;
  }
  // check if day is number
  var dayString = document.getElementById("day").value;
  if (isNaN(dayString)) {
    alert("Bad day was entered"); 
    return false;
  }
  // check if day between 1 and 31
  var day = parseInt(dayString);
  if (0 > day || day > 31) {
    alert("Bad day entered");
    return false;
  }
  
  // check if day is number
  var monthString = document.getElementById("month").value;
  if (isNaN(monthString)) {
    alert("Bad month was entered"); 
    return false;
  }
  // check if month between 0 and 12
  var month = parseInt(monthString);
  if (0 > month || month > 12) {
    alert("Bad month entered");
    return false;
  }
  
  // check if day is number
  var yearString = document.getElementById("year").value;
  if (isNaN(yearString)) {
    alert("Bad year was entered"); 
    return false;
  }
  // check if day between 0 and 31
  var year = parseInt(yearString);
  if (1900 > year || year > (new Date()).getFullYear()) {
    alert("Bad year entered");
    return false;
  }
  // TODO
  
  // seems that data is ok
  return true;
}


// check for page 2step.html
function checkSignUpDataStep2() {
  // check if email is not empty
  if (0 == document.getElementById("Email").value.length || undefined == document.getElementById("Email").value) {
    alert("No email entered");
    return false;
  }
  return true;
}