// Main menu
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.menuLogNote = 'x';

SC.menu = function (aTitle, aMainSubtitle, aButtons, aCallback) {
    // Show ending menu
    SC.pause = true;
    if (SC.menuVisible) {
        console.log('Menu already visible');
        return;
    }
    SC.menuVisible = true;

    if (!aButtons) {
        console.error('SC.menu no buttons ' + SC.menuLogNote || 'z');
        return;
    }

    // background
    var bg, h1, h2, div, i, t, tp = SC.keyboard && SC.keyboard.touchpad;
    bg = document.createElement('div');
    bg.className = 'menu';

    // title
    h1 = document.createElement('h1');
    h1.textContent = aTitle;
    bg.appendChild(h1);
    h2 = document.createElement('h2');
    h2.textContent = aMainSubtitle;
    bg.appendChild(h2);

    // div
    div = document.createElement('div');
    div.className = 'main';
    bg.appendChild(div);

    function one(aCaption, aCallback, aCallbackData, aSubtitle) {
        // One button
        var item = document.createElement('button'), sub;
        item.textContent = aCaption;
        item.className = 'item';
        item.addEventListener('click', function (event) {
            aCallback(aCaption, aCallbackData, aSubtitle, event);
        });
        item.data = aCallbackData;
        if (aSubtitle) {
            sub = document.createElement('div');
            sub.className = 'subtitle';
            sub.textContent = aSubtitle;
            sub.data = aCallbackData;
            item.appendChild(sub);
        }
        if (!aCallback) {
            item.disabled = true;
        }
        div.appendChild(item);
        return item;
    }

    function hide() {
        // hide menu
        SC.menuVisible = false;
        bg.parentElement.removeChild(bg);
        SC.pause = false;
        // restore touchpad
        if (SC.keyboard) {
            SC.keyboard.touchpad = tp;
        }
    }

    one('Return to game', hide);

    for (i = 0; i < aButtons.length; i++) {
        t = aButtons[i].split('\n');
        one(t[0], aButtons[i] === 'Feedback' ? onFeedback : aCallback, aButtons[i], t[1]);
    }

    // disable touchpad
    if (SC.keyboard) {
        SC.keyboard.touchpad = false;
    }

    // show menu
    document.body.appendChild(bg);
    return { bg: bg, hide: hide };
};

