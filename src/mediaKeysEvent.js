/* 
chrome.commands.getAll(function(commands){
    commands.forEach(function(command){
        console.log(command);
    });
});
//*/

chrome.commands.onCommand.addListener(function(command) {
    //console.log('commands : ', command);
    if (command == "play-pause") {
        chrome.tabs.getAllInWindow(null, function(tabs){
            for(var i in tabs){
                var tab = tabs[i];
                chrome.tabs.sendMessage(tab.id, {action: command});
            }
        });

    }
});
