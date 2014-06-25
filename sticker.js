console.log('sticker.js works');

var currElem = document.activeElement;

console.log(currElem);

function sendMessage(msg) {
    //matches text
    if (msg.lastIndexOf("BUNHEART",0) === 0) {
        
        //erase text
        currElem.value = "";

        var parentElem = currElem.parentNode.parentNode;
        console.log(parentElem);
        console.log(emoteToggle);
        
        //grab all stickers
        //TODO only stickers in main screen
        var elems = parentElem.getElementsByClassName('_5r8i');
        console.log(elems);
        
        //find the right one through CSS
        //click on it
        //TODO scalable
        for (i in elems) {
            var curr = elems[i];
            console.log(i, curr);
            var style = curr.currentStyle || window.getComputedStyle(curr, false);
            var url = style.backgroundImage.slice(4, -1);
            console.log(url);
            if (url === "https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xpa1/t39.1997-6/p64x64/851575_392309994199646_291720828_n.png") {
                curr.click();
            }
        }
    }
}

if (currElem.tagName === "TEXTAREA") {

    //get chat window
    var parentElem = currElem.parentNode.parentNode;
    
    //first time loading
    if (!parentElem.classList.contains('fbs-tagged')) {
        
        //hide the flyout
        var flyout = parentElem.getElementsByClassName('panelFlyout');
        flyout[0].style.display = 'none';
        //click emoticon
        var emoteToggle = parentElem.getElementsByClassName("emoteTogglerImg");
        emoteToggle[0].click();
    
        //delay to send first time
        setTimeout(function() {
            emoteToggle[0].click();
            flyout[0].style.display = '';
        
            //tag chat window
            parentElem.className = parentElem.className + " fbs-tagged";

            var value = currElem.value;
            sendMessage(value);
        },2000);
    } else {
        sendMessage(currElem.value);
    }
}
