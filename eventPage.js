if (chrome.runtime && chrome.runtime.onStartup) {
    console.log('Startup');
}

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);
    chrome.tabs.executeScript({
        file:"sticker.js"
    });
});
