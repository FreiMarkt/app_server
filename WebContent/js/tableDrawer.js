/**
 * This function makes a header for the table. Entries are names of the 
 * properties of the object.
 * @param object
 */
function makeHeader(object) {
	// make header
	var header = '<tr>';
	for (var propertyName in object[0]) {
		table = table.concat('<th>');
		table = table.concat(propertyName); 
		table = table.concat('</th>');
	}
	return header.concat('</tr>');
}

/**
 * We know that service is going to return an array filled with MEMBER objects.
 */
function getArrayOfMembers() {
	var jsonstring = '{}';
	var request = xmlhttp=new XMLHttpRequest();
	request.open("GET", "/howaboutno/moo/member/getAll", false);
//	request.open("GET","/rest_services/moo/member/getAll",false);
	request.send();

	if (request.status == 200) {
		jsonstring = request.responseText;
	} else {
		alert("problems with request to get all the members");
	}

	return JSON.parse(jsonstring);
}

/**
 * Puts every property's value of every object into a HTML table cell. 
 * @param arrayOfObjects
 * @returns {String}
 */
function fillRows(arrayOfObjects) {
	var table = '';
	// iterate through objects
	for (var index in object) {
		table = table.concat('<tr>');
		// iterate through properties of objects
		for (var property in object[index]) {
			table = table.concat('<td>');
			table = table.concat(object[index][property]); 
			table = table.concat('</td>');
		}
		table = table.concat('</tr>');
	}
	return table;
}

/**
 * This function gets all the members and prints them as a table.
 */
function makeTable() {
	var object = getArrayOfMembers(); 

	var table = '<table border="1">';
	table = table.concat(makeHeader(object[0]));
	table = table.concat(fillRows(object));
	table = table.concat('</table>');
	
	var element = document.getElementById("thebutton");
	element.insertAdjacentHTML("afterend", table);
}

