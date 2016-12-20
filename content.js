chrome.runtime.onMessage.addListener( function(request) {
	if (request.message === 'clicked_browser_action') {
		var result = "";
		request.historyItems.forEach(function(e) {
			result += e.url + "\n";
		});
		alert(result);
	}
});