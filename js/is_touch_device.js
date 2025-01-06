/// Return true if device has touch screen (to show touchpad)
"use strict";
// globals: window, navigator

var SC = window.SC || {};

SC.isTouchDevice = function () {
    // Return true if device has touch screen (to show touchpad)
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};
