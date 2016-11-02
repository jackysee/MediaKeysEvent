chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var evt = new CustomEvent('PlayPause', {});
    document.body.dispatchEvent(evt);
});
