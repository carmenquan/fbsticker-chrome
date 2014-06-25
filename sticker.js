console.log('sticker.js works');

var currElem = document.activeElement;

console.log(currElem);

if (currElem.tagName === "TEXTAREA") {
    var value = currElem.value;
    console.log(value);
    if (value.lastIndexOf("BUNHEART",0) === 0) {
        currElem.value = "";
        var parentElem = currElem.parentNode.parentNode;
        var emoteToggle = parentElem.getElementsByClassName("emoteTogglerImg");
        console.log(parentElem);
        console.log(emoteToggle);
        //emoteToggle[0].click();/*
        var elems = document.getElementsByClassName('_5r8i');
        console.log(elems);
        for (i in elems) {
            var curr = elems[i];
            console.log(i, curr);
            var style = curr.currentStyle || window.getComputedStyle(curr, false);
            var url = style.backgroundImage.slice(4, -1);
            console.log(url);
            if (url ===
                "https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xpa1/t39.1997-6/p64x64/851575_392309994199646_291720828_n.png") {
                curr.click();
            }
        }
    }
}
