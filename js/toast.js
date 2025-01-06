// Show small piece of text on screen
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.showToast = function (aMessage) {
    // Show small piece of text at the bottom of screen
    var div, toast;
    div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '1cm';
    div.style.left = '1cm';
    div.style.right = '1cm';
    div.style.bottom = '1cm';
    div.style.zIndex = 111;
    div.style.textAlign = 'center';
    toast = document.createElement('div');
    toast.textContent = aMessage;
    toast.style.display = 'inline-block';
    toast.style.backgroundColor = 'rgba(0,0,0,0.7)';
    toast.style.color = 'white';
    toast.style.padding = '1ex';
    toast.style.borderRadius = '2ex';
    document.body.appendChild(div);
    window.setTimeout(function () {
        div.parentElement.removeChild(div);
    }, 5000);
    div.appendChild(toast);
};

