
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init checkmarc is ver 0.3b");

//example code

$( document ).ready(function() {

// Document load code here if needed; executes on document load. (before media)

});

// ANYTHING OUTSIDE FUNCTION BELOW WILL ALWAYS EXECUTE ON TAB LOAD;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

		//ALL of this is done on browser action click

		var setgroup = "Service Desk";
		var myname = "Hussain, Yousuf";
		var textfteam = document.getElementById('sys_display.incident.assignment_group');

		console.log(setgroup, myname);
		console.log("vars init complete");


		console.log("add listener complete");


// This is the important line and if block; it seems it is the main launch set when 'clicked_browser_action'
		if( request.message === "clicked_browser_action" ) {

			//add text
			textfteam.value = "Service Desk";
			//There should be something here to run that report getReference and make assignment group bettter.

			//functional code
			console.log("finish on-click block");

		}
	}
);
