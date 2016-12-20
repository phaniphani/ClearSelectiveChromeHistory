chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  var x = tab;
  // var offset = 12 * 30 * 24 * 60 * 60 * 1000;
  var offset = 60 * 60 * 1000;
   chrome.history.search({"text": "facebook", "startTime": Date.now() - offset, "endTime": Date.now(), "maxResults": 1000000},
        function (historyItems) {
            chrome.tabs.sendMessage(x.id, {
                    "message": "clicked_browser_action", 
                    "historyItems": historyItems
                });
            historyItems.forEach(function(element){
                chrome.history.deleteUrl({"url": element.url}, function(){});
            });
        });
});