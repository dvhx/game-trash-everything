// Sprites for explosion animations
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.sprites = (function () {
    var self = {};
    self.sprites = {};

    self.add = function (aTile) {
        if (self.sprites.hasOwnProperty(aTile)) {
            return;
        }
        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            t = SC.tiles[aTile];
        canvas.width = 16;
        canvas.height = 16;
        context.imageSmoothingEnabled = false;
        context.drawImage(t.image,
                t.x, t.y, SC.size, SC.size,
                0,
                0,
                SC.size,
                SC.size
                );
        self.sprites[aTile] = canvas;
    };

    return self;
}());
