// Animated lip on the top with info
"use strict";
// globals: document, window
// require: none

var SC = window.SC || {};

SC.lip = function (aMessage, aCallback, aAutohideAfterSeconds) {
    // Show lip on top with info
    var div, lip, text, close;

    function hide() {
        // hide lip
        lip.style.opacity = 0;
        lip.style.top = '-3cm';
        setTimeout(function () {
            if (div.parentElement) {
                div.parentElement.removeChild(div);
            }
        }, 300);
    }

    // autohide
    if (aAutohideAfterSeconds > 0) {
        setTimeout(hide, 1000 * aAutohideAfterSeconds);
    }

    // div
    div = document.createElement('div');
    div.style.position = "fixed";
    div.style.top = 0;
    div.style.left = 0;
    div.style.right = 0;
    div.style.width = '100%';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.fontSize = 'small';
    div.style.color = 'black';
    div.style.zIndex = 9999;

    function color(aColor) {
        // set lip color
        lip.style.borderTop = '1cm solid ' + aColor;
        lip.style.backgroundColor = aColor;
    }

    // lip
    lip = document.createElement('div');
    lip.style.borderBottomLeftRadius = '1ex';
    lip.style.borderBottomRightRadius = '1ex';
    lip.style.borderTop = '1cm solid #ff7';
    lip.style.padding = '1ex';
    lip.style.boxShadow = '0 0 2ex black';
    lip.style.backgroundColor = '#ff7';
    lip.style.opacity = 0;
    lip.style.transition = 'opacity 0.2s linear, top 0.2s cubic-bezier(1.000, -0.530, 0.405, 1.425)';
    lip.style.top = '-3cm';
    lip.style.position = 'fixed';
    lip.style.display = 'flex';
    lip.style.alignItems = 'center';
    lip.style.textAlign = 'center';
    lip.style.maxWidth = '70vw';
    div.appendChild(lip);
    lip.onclick = function (event) {
        hide();
        if (aCallback) {
            if (event.target === lip || event.target === text || (event.target.parentElement && event.target.parentElement === text)) {
                setTimeout(aCallback, 300);
            }
        }
    };

    // text
    text = document.createElement('span');
    text.innerHTML = aMessage;
    lip.appendChild(text);

    // close button
    close = document.createElement('span');
    close.textContent = '✕';
    close.style.color = 'blue';
    close.style.padding = '0.5ex';
    close.style.margin = 0;
    close.style.cursor = 'pointer';
    lip.appendChild(close);
    close.onclick = hide;

    // show it and animate
    document.body.appendChild(div);
    setTimeout(function () {
        lip.style.opacity = 1;
        lip.style.top = '-1cm';
    }, 300);

    return {div: div, lip: lip, close: close, text: text, hide: hide, color: color};
};

