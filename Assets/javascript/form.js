var states = require('states.js');

// variables
var newDiv = $("<div>")
var newOption = $("<option>")

// make simple form with: 
newDiv.addAttribute("id='input-container'");
  newDiv.addAttribute("class='stateList'");
    $("<form id='simpleStateForm'>");
      $("<p id='selectStateText'>Select a US state/territory:</p>");
        
      // dropdown list of states/territories
      $("<select name='stateSelect' id='stateSelection'>");
        forEach (i = 0; i < states.length; i++) {
          newOption(statesArray[i]).appendTo('#stateForm')
        };
      $("</select>");

      // submit button
      $("<button id='submitBtn'>Submit</button>");
    $("</form>");
  $("</div>");
$("</div>");

// test code
console.log(states[2]);