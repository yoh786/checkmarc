//Background.js

// Called when user clicks browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
	// send message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	   var activeTab = tabs[0];
	   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
 		 chrome.browserAction.setBadgeBackgroundColor({color: '#3CBA54'});
		 chrome.browserAction.setBadgeText({text:':)', tabId: activeTab.id});

		 console.log("finish intepreting background.js")
	});
});
