
// Content.js
// This script is functional code that can be executed in a webpage
console.log("init checkmarc is ver 0.1b");

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

		console.log(setgroup, myname);
		console.log("vars init complete");


		console.log("add listner complete");


// This is the important line and if block; it seems it is the main launch set when 'clicked_browser_action'
		if( request.message === "clicked_browser_action" ) {

			//Gen'ing letter

			//functional code
			console.log("finish on click block");

		}
	}
);
