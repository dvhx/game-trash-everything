// Keyboard touchpad (WASD and arrows on desktop)
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.keyboard = (function () {
    // Keyboard touchpad
    var self = {};
    self.key = {};
    self.touchpad = true;

    self.onKeyDown = function (event) {
        // Detect key press
        self.key[event.key] = true;
        // touchpad
        if (self.touchpad && SC.touchpad) {
            if (self.key.a || self.key.ArrowLeft) {
                SC.touchpad.x = -1;
                SC.touchpad.angle = Math.atan2(SC.touchpad.y, SC.touchpad.x);
            }
            if (self.key.d || self.key.ArrowRight) {
                SC.touchpad.x = 1;
                SC.touchpad.angle = Math.atan2(SC.touchpad.y, SC.touchpad.x);
            }
            if (self.key.w || self.key.ArrowUp) {
                SC.touchpad.y = -1;
                SC.touchpad.angle = Math.atan2(SC.touchpad.y, SC.touchpad.x);
            }
            if (self.key.s || self.key.ArrowDown) {
                SC.touchpad.y = 1;
                SC.touchpad.angle = Math.atan2(SC.touchpad.y, SC.touchpad.x);
            }
            if (self.key.ArrowLeft || self.key.ArrowRight || self.key.ArrowUp || self.key.ArrowDown) {
                event.preventDefault();
            }
        }
    };

    self.onKeyUp = function (event) {
        // Detect key release
        self.key[event.key] = false;
        // touchpad
        if (self.touchpad && SC.touchpad) {
            if ((event.key === 'a' && !self.key.a) || (event.key === 'ArrowLeft' && !self.key.ArrowLeft)) {
                SC.touchpad.x = 0;
            }
            if ((event.key === 'd' && !self.key.d) || (event.key === 'ArrowRight' && !self.key.ArrowRight)) {
                SC.touchpad.x = 0;
            }
            if ((event.key === 'w' && !self.key.w) || (event.key === 'ArrowUp' && !self.key.ArrowUp)) {
                SC.touchpad.y = 0;
            }
            if ((event.key === 's' && !self.key.s) || (event.key === 'ArrowDown' && !self.key.ArrowDown)) {
                SC.touchpad.y = 0;
            }
            if (SC.touchpad.x !== 0 || SC.touchpad.y !== 0) {
                SC.touchpad.angle = Math.atan2(SC.touchpad.y, SC.touchpad.x);
            }
        }
    };

    window.addEventListener('keydown', self.onKeyDown, true);
    window.addEventListener('keyup', self.onKeyUp, true);

    return self;
}());

