/*
 * Given an object creates header line for the table.
 */
function createTableHeader(oneObject) {
  "use strict";
  // initialize variables
  var headerLine = '<tr>',
      propName;
  // iterate through properties of the object
  for (propName in oneObject) {  
    if (oneObject.hasOwnProperty(propName)) {

          headerLine = headerLine.concat('<th>');
          headerLine = headerLine.concat(propName);
          headerLine = headerLine.concat('</th>');
      }
  }

  headerLine = headerLine.concat('<th>');
  headerLine = headerLine.concat('Delete');
  headerLine = headerLine.concat('</th>');

  headerLine = headerLine.concat('<th>');
  headerLine = headerLine.concat('Modify');
  headerLine = headerLine.concat('</th>');
  
  // close the header line
  headerLine = headerLine.concat('</tr>');
  return headerLine;
}

/**
 * We know that service is going to return an array filled with MEMBER objects.
 */
function getArrayOfMembers() {
	var jsonstring = '{}';
	var request = xmlhttp=new XMLHttpRequest();
	request.open("GET","/rest_services/r/member/getAll",false);
	request.send();

	if (request.status == 200) {
		jsonstring = request.responseText;
	} else {
		alert("problems with request to get all the members");
	}

	return JSON.parse(jsonstring);
}

// delete the member
function deleteMember(member) {
  var request = new XMLHttpRequest();
  request.open("POST", "/rest_services/r/member/delete", false);
  request.setRequestHeader("Content-type","application/json");
  request.send(JSON.stringify(member));

  return JSON.parse(request.responseText);
}

// delete specific for this page
function deleteThis(memberid) {
  var member = {
    "memberid" : memberid
  };
  deleteMember(member);
  window.location.href = "admin_members.html";
}

function modifyThis(memberid) {
  window.location.href = "modifyMember.html?memberid=" + memberid;
}

/**
 * Puts every property's value of every object into a HTML table cell. 
 * @param arrayOfObjects
 * @returns {String}
 */
function fillRows(arrayOfObjects) {
	var table = '',
        id;
	// iterate through objects
	for (var index in arrayOfObjects) {
      table = table.concat('<tr>');
      // iterate through properties of objects
      for (var property in arrayOfObjects[index]) {
          if ('memberid' == property) {
            id = arrayOfObjects[index][property];
          }
          table = table.concat('<td>');
          table = table.concat(arrayOfObjects[index][property]); 
          table = table.concat('</td>');
      }
      // member delete button
      table = table.concat('<td>');
      table = table.concat('<button id='+ id + ' type="button" onclick="deleteThis(this.id)">Delete</button>');
      table = table.concat('</td>');

      table = table.concat('<td>');
      table = table.concat('<button id='+ id + ' type="button" onclick="modifyThis(this.id)">Modify</button>');
      table = table.concat('</td>');

      table = table.concat('</tr>');
	}
	return table;
}

/**
 * This function gets all the members and prints them as a table.
 */
function makeTable() {
	var object = getArrayOfMembers(); 

	var table = '<table id="memberTable" border="1">';
	table = table.concat(createTableHeader(object[0]));
	table = table.concat(fillRows(object));
	table = table.concat('</table>');
	
	var element = document.getElementById("thebutton");
  
//    alert(document.getElementById("memberTable"));
    if (null != document.getElementById("memberTable")) {
      var parent = document.getElementById("memberTable").parentNode;
      parent.removeChild(document.getElementById("memberTable"));
    }
	element.insertAdjacentHTML("afterend", table);
}

