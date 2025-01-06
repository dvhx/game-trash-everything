// Touchpad with arrows for mobile phones
"use strict";
// globals: document
// require: none

var SC = window.SC || {};

SC.touchpad = function (aImageUrl, aCallback, aZeroRelease) {
    // Touchpad with arrows for mobile phones
    var self = {}, w, h, w2, h2;
    self.x = 0;
    self.y = 0;
    self.visible = false;
    self.angle = 0;

    // arrows element
    self.img = document.createElement('img');
    self.img.style.position = 'fixed';
    self.img.style.left = '1ex';
    self.img.style.bottom = '1ex';
    self.img.style.zIndex = 999;
    self.img.style.outline = '1px solid transparent';   // chrome 72 bug, must be 1px otherwise touchmove events won't work
    self.img.addEventListener('load', function () {
        w = self.img.width;
        h = self.img.height;
        w2 = w / 2;
        h2 = h / 2;
        console.log('touchpad size', w, h);
    });
    self.img.src = aImageUrl;
    document.body.appendChild(self.img);
    self.visible = true;

    // touch events
    // touch start
    self.img.addEventListener('touchstart', function (event) {
        try {
            if (event.cancelable) {
                event.preventDefault();
            }
        } catch (ignore) {
        }
        if (!self.visible) {
            self.x = 0;
            self.y = 0;
            return;
        }
        self.x = (event.targetTouches[0].clientX - event.target.offsetLeft - w2) / w2;
        self.y = (event.targetTouches[0].clientY - event.target.offsetTop - h2) / h2;
        self.x = Math.max(Math.min(self.x, 1), -1);
        self.y = Math.max(Math.min(self.y, 1), -1);
        self.angle = Math.atan2(self.y, self.x);
        if (aCallback) {
            aCallback(self.x, self.y);
        }
    }, true);
    // touch move
    self.img.addEventListener('touchmove', function (event) {
        try {
            if (event.cancelable) {
                event.preventDefault();
            }
        } catch (ignore) {
        }
        if (!self.visible) {
            self.x = 0;
            self.y = 0;
            return;
        }
        self.x = (event.targetTouches[0].clientX - event.target.offsetLeft - w2) / w2;
        self.y = (event.targetTouches[0].clientY - event.target.offsetTop - h2) / h2;
        self.x = Math.max(Math.min(self.x, 1), -1);
        self.y = Math.max(Math.min(self.y, 1), -1);
        self.angle = Math.atan2(self.y, self.x);
        if (aCallback) {
            aCallback(self.x, self.y);
        }
    }, true);
    // touch end
    self.img.addEventListener('touchend', function (event) {
        try {
            if (event.cancelable) {
                event.preventDefault();
            }
        } catch (ignore) {
        }
        if (!self.visible) {
            self.x = 0;
            self.y = 0;
            return;
        }
        if (aCallback) {
            aCallback(self.x, self.y);
        }
        // reset to zero when user end touch
        if (aZeroRelease) {
            self.x = 0;
            self.y = 0;
            //self.angle = 0;
        }
    }, true);

    self.show = function () {
        // show arrows
        self.visible = true;
        self.img.style.visibility = 'visible';
    };

    self.hide = function () {
        // hide arrows
        self.visible = false;
        self.img.style.visibility = 'hidden';
        self.x = 0;
        self.y = 0;
    };

    // mouse fallback (during development only)

    function internalUpdate(aDown, aX, aY) {
        if (aDown) {
            self.x = (aX - self.img.clientWidth / 2) / self.img.clientWidth;
            self.y = (aY - self.img.clientHeight / 2) / self.img.clientHeight;
            self.angle = Math.atan2(self.y, self.x);
            if (aCallback) {
                aCallback(self.x, self.y);
            }
        } else {
            self.x = 0;
            self.y = 0;
        }
    }

    self.onMouseDown = function (event) {
        // start moving
        event.preventDefault();
        internalUpdate(true, event.offsetX, event.offsetY);
    };

    self.onMouseMove = function (event) {
        // change direction
        event.preventDefault();
        if (event.which === 1) {
            internalUpdate(true, event.offsetX, event.offsetY);
        }
    };

    self.onMouseUp = function (event) {
        // stop moving
        event.preventDefault();
        internalUpdate(false);
    };

    self.img.addEventListener('mousedown', self.onMouseDown);
    self.img.addEventListener('mousemove', self.onMouseMove);
    self.img.addEventListener('mouseup', self.onMouseUp);

    return self;
};

