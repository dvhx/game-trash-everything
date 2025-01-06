// Canvas functions (initialization, rendering, resizing)
"use strict";
// globals: document, window, Image

var SC = window.SC || {};

SC.pause = false;

SC.init = function (aCallback) {
    // Load all tileset images, then call callback
    var id, image, images = {}, remaining = 2;

    // find number of tilesets
    remaining = {};
    for (id in SC.tiles) {
        if (SC.tiles.hasOwnProperty(id)) {
            remaining[SC.tiles[id].tileset] = 1;
        }
    }
    remaining = Object.keys(remaining).length;

    function onLoad() {
        remaining--;
        console.log("Tileset loaded", this.src);
        if (remaining <= 0) {
            aCallback();
        }
    }
    for (id in SC.tiles) {
        if (SC.tiles.hasOwnProperty(id)) {
            if (!images.hasOwnProperty(SC.tiles[id].tileset)) {
                image = new Image();
                image.src = "map/tileset/" + SC.tiles[id].tileset + ".png";
                image.addEventListener("load", onLoad);
                images[SC.tiles[id].tileset] = image;
            }
            image = images[SC.tiles[id].tileset];
            SC.tiles[id].image = image;
        }
    }
};

SC.canvas = (function () {
    // Canvas functions (initialization, rendering, resizing)
    var self = {}, measuredFontHeightsCache = {};
    self.zoom = SC.storage.readNumber('SC.canvas.zoom', 2);
    self.viewport = SC.storage.readObject('SC.canvas.viewport', {x: 0, y: 0, w: 5, h: 5});

    function onResize() {
        // Handle window resize event
        if (self.bg) {
            self.w = self.bg.clientWidth;
            self.h = self.bg.clientHeight;
            self.viewport.w = Math.ceil(self.w / SC.size / self.zoom);
            self.viewport.h = Math.ceil(self.h / SC.size / self.zoom);
            self.cx = Math.floor(self.w / (SC.size * self.zoom) / 2);
            self.cy = Math.floor(self.h / (SC.size * self.zoom) / 2);
            self.bg.width = self.w;
            self.bg.height = self.h;
            self.char.width = self.w;
            self.char.height = self.h;
            self.bgContext.imageSmoothingEnabled = false;
            self.charContext.imageSmoothingEnabled = false;
            SC.characters.key = '';
            SC.background.key = '';
        }
    }

    self.clear = function () {
        // Clear background canvas
        if (self.bgContext) {
            self.bgContext.clearRect(0, 0, self.bg.width, self.bg.height);
        }
    };

    self.show = function () {
        // Show canvases
        SC.canvas.bg.style.display = 'block';
        SC.canvas.char.style.display = 'block';
    };

    self.hide = function () {
        // Hide canvases
        SC.canvas.bg.style.display = 'none';
        SC.canvas.char.style.display = 'none';
    };

    self.init = function (aBackgroundCanvasOrId, aCharacterCanvasOrId) {
        // Initialize canvases and viewport
        self.bg = typeof aBackgroundCanvasOrId === 'string' ? document.getElementById(aBackgroundCanvasOrId) : aBackgroundCanvasOrId;
        self.char = typeof aCharacterCanvasOrId === 'string' ? document.getElementById(aCharacterCanvasOrId) : aCharacterCanvasOrId;
        self.bgContext = self.bg.getContext('2d');
        self.charContext = self.char.getContext('2d');
        onResize();
    };

    window.addEventListener('resize', onResize);

    self.customViewport = function (aX, aY) {
        // Create custom viewport around given position, used after teleportation for map lazy loading
        return {
            x: aX - self.cx,
            y: aY - self.cy,
            w: self.viewport.w,
            h: self.viewport.h
        };
    };

    self.setZoom = function (aZoom, aRemember) {
        // Change zoom
        self.zoom = parseFloat(aZoom);
        if (self.zoom < 1) {
            self.zoom = 1;
        }
        onResize();
        if (aRemember) {
            SC.storage.writeNumber('SC.canvas.zoom', self.zoom);
        }
    };

    self.fontHeight = function (aFontSizePx, aFontName) {
        // Measure real font height, because context.measureText only returns width

        // use cached value (because it is slow)
        if (measuredFontHeightsCache.hasOwnProperty(aFontSizePx + ' ' + aFontName)) {
            return measuredFontHeightsCache[aFontSizePx + ' ' + aFontName];
        }

        var can, ctx, d, i, y, sample, bpp, s;
        sample = 'AaGgYyQq|"~\'Ž';
        bpp = 4; // RGBA = 4 bpp

        // prepare canvas
        can = document.createElement('canvas');
        ctx = can.getContext('2d');
        ctx.font = aFontSizePx + 'px ' + aFontName;
        can.width = Math.ceil(ctx.measureText(sample).width);
        can.height = 2 * aFontSizePx;
        // when canvas is resized font must be set again
        ctx.font = aFontSizePx + 'px ' + aFontName;

        // draw sample text from top
        ctx.textBaseline = 'top';
        ctx.fillStyle = 'red';
        ctx.fillText(sample, 0, 0);

        // get pixels array
        d = ctx.getImageData(0, 0, can.width, can.height).data;

        // find first non-black pixel from the bottom
        y = can.height;
        for (i = d.length; i > 0; i--) {
            if (d[i] > 0) {
                y = Math.ceil(i / (can.width * bpp));
                break;
            }
        }
        if (y >= can.height) {
            s = window.screen || {availWidth: -1, availHeight: -1};
            console.error('Cannot determine font height: ' + ctx.font + ' screen=' + s.availWidth + 'x' + s.availHeight + ' y=' + y + ' ch=' + can.height);
        }

        measuredFontHeightsCache[aFontSizePx + ' ' + aFontName] = y;
        return y;
    };

    return self;
}());

SC.timeElapsed = 0;

SC.render = function () {
    // Main rendering function
    if (SC.pause) {
        return;
    }
    SC.time = Date.now();
    SC.timeElapsed += SC.time - (SC.timeOld || SC.time);
    SC.timeOld = SC.time;
    // characters
    SC.characters.update(SC.time);
    // background
    SC.background.lazy();
    SC.background.render(SC.characters.player, SC.canvas.cx, SC.canvas.cy);
    // draw characters
    SC.characters.draw(SC.canvas.charContext, SC.canvas.cx, SC.canvas.cy, SC.canvas.w, SC.canvas.h);
};

SC.loop = function () {
    // Calling main rendering function in a loop
    SC.render();
    // do your stuff here

    // call itself
    requestAnimationFrame(SC.loop);
};

SC.standAloneTile = function (aParent, aTiles, aZoom, aSize) {
    // create canvas with stand alone tile, used e.g. in shop
    var canvas, context, oldzoom = SC.zoom, i, t;
    aSize = aSize || 16;
    try {
        SC.zoom = aZoom || 3;
        canvas = document.createElement('canvas');
        canvas.width = SC.zoom * aSize;
        canvas.height = SC.zoom * aSize;
        canvas.style.width = SC.zoom * aSize + 'px';
        canvas.style.height = SC.zoom * aSize + 'px';
        context = canvas.getContext('2d');
        context.imageSmoothingEnabled = false;
        //SC.tile(context, aTiles, 0, 0);
        for (i = 0; i < aTiles.length; i++) {
            t = SC.tiles[aTiles[i]];
            context.drawImage(t.image,
                t.x, t.y, aSize, aSize,
                0,
                0,
                aSize * SC.zoom,
                aSize * SC.zoom
                );
        }
        aParent.appendChild(canvas);
        return canvas;
    } finally {
        SC.zoom = oldzoom;
    }
};
