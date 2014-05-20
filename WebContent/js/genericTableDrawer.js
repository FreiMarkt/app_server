/*
 * Entry method to draw a table.
 * Params:
 * # jsonListOfObject: array of objects that are going to be drawn into the table
 * # columnBlackList: property names of jsonListOfObject that will not 
 *   be drawn as in a column
 * # buttonNames: every row might have action buttons, this parameter
 *   defines their names. Also, callback with this name is going to be provided.
 *   Names of callbacks are constructed in the following way:
 *     tableButtonCallback + <ButtonName>
 * # tableId: id attribute of the table tag.
 *
 * If an object has an ID property it will be used to make an id of the row
 * @author: Dainius Jocas
 */
function createActionTable(arrayOfObjects, columnBlackList, buttonNames, tableId) {
  "use strict";
  
  // array of object should not be empty
  if (!arrayOfObjects) {
    return '<h1>No data has been provided for the table</h1>';
  }
  
  // check if value belongs to array
  var isInArray = function (value, array) {
    // if array is null or undefined then values doesn't belong to the array
    if (!array) {
      return false;
    }
    return array.indexOf(value) > -1;
  },
      
      
    // every row might have couple of button cells, these are created here  
    createButtonCells = function (cellId, buttonNames) {
      var buttonCells = "", button;
      // prevent null and undefined
      if (!buttonNames) {
        return buttonCells;
      }
      buttonNames.forEach(function (entry) {
        button =
          '<button id=' +
          cellId +
          ' type="button" onclick="tableButtonCallback' +
          entry +
          '(this.id)">' +
          entry +
          '</button>';
        buttonCells = buttonCells.concat('<td>' + button + '</td>');
      });
      return buttonCells;
    },
      

    // header also knows what button must be shown
    createHeaderEntriesForButtons = function (buttonNames) {
      var buttonEntries = "";
      // check if array is not empty
      if (!buttonNames) {
        return buttonEntries;
      }
      buttonNames.forEach(function (entry) {
        buttonEntries = buttonEntries.concat('<th>' + entry + '</th>');
      });
      return buttonEntries;
    },
  
    
    // Given an object creates header line for the table.
    createTableHeader = function (oneObject, columnBlackList, buttonNames) {
      var headerLine = '<tr>',
        propertyName;
      // iterate through properties of the object
      for (propertyName in oneObject) {
        if (oneObject.hasOwnProperty(propertyName)) {
          if (!isInArray(propertyName, columnBlackList)) {
            headerLine = headerLine.concat('<th>' + propertyName + '</th>');
          }
        }
      }
      // add buttons
      headerLine = headerLine.concat(createHeaderEntriesForButtons(buttonNames));
      return headerLine.concat('</tr>');
    },

      
    // creates all <td> tags for a line of the table  
    createLineContents = function (object, columnBlackList, buttonNames) {
      var lineContents = '',
        prop,
        lineId;
      // iterate through properties of the object
      for (prop in object) {
        if (object.hasOwnProperty(prop)) {
          if ('id' === prop) {
            lineId = object[prop];
          }
          if (!isInArray(prop, columnBlackList)) {
            
            lineContents = lineContents.concat('<td>' + object[prop] + '</td>');
          }
        }
      }
      // action button addition
      return lineContents.concat(createButtonCells(lineId, buttonNames));
    },
    
      
    // initialize table with id, border type, and header row  
    table =
    '<table id="' +
    tableId +
    '" style=" border:1px solid; border-color: #96c93c transparent;">';
    
  
  if (0 < arrayOfObjects.length) {
    table = table.concat(createTableHeader(arrayOfObjects[0],
                         columnBlackList,
                         buttonNames));
    // iterate through array of objects and construct table rows
    arrayOfObjects.forEach(function (entry, index, array) {
      table = table.concat('<tr>' +
                           createLineContents(entry,
                                              columnBlackList,
                                              buttonNames) +
                           '</tr>');
    });
  } else {
    table = table.concat('<tr><td>No data</td></tr>');
  }
  
  return table.concat('</table>');
}