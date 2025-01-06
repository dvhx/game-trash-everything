// Animate exploding sprites on top of everything else
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.chunk = function (aImg, aX, aY, aSrcX, aSrcY, aSrcW, aSrcH, aDstX, aDstY, aDstW, aDstH) {
    // Create single chunk of image
    this.img = aImg;
    this.x = aX;
    this.y = aY;
    this.sx = aSrcX;
    this.sy = aSrcY;
    this.sw = aSrcW;
    this.sh = aSrcH;
    this.dx = aDstX - aDstW / 2;
    this.dy = aDstY - aDstH / 2;
    this.dw = aDstW;
    this.dh = aDstH;
    var ax = aSrcX + aSrcW / 2,
        ay = aSrcY + aSrcH / 2,
        bx = 16 / 2,
        by = 16 / 2;
    this.vx = (ax - bx) / 10 + 0.25 * (Math.random() - Math.random());
    this.vy = (ay - by) / 5 + 0.25 * (Math.random() - Math.random());
    this.rx = SC.player.rx;
    this.ry = SC.player.ry;
    this.opacity = 3;
};

SC.chunk.prototype.update = function (aContext, aZoom) {
    // Update position of flying chunk
    var kx = aZoom * (SC.player.rx - this.rx),
        ky = aZoom * (SC.player.ry - this.ry),
        dt = 1;
    aContext.globalAlpha = this.opacity > 1 ? 1 : this.opacity;
    aContext.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.dx - kx, this.dy - ky, this.dw, this.dh);
    this.vy += 0.04 * dt;
    this.dx += this.vx;
    this.dy += this.vy;
    this.opacity *= 0.95;
};

SC.explosions = function (aCanvasId, aZoom) {
    // Explosions manager
    var self = {};
    self.explosions = [];
    self.fragments = 9;
    self.fragmentFrames = 50;
    self.canvas = document.getElementById(aCanvasId);
    self.context = self.canvas.getContext('2d');
    self.context.imageSmoothingEnabled = false;

    self.resize = function () {
        // Adjust explosions canvas size
        self.w = window.innerWidth;
        self.h = window.innerHeight;
        self.canvas.width = window.innerWidth;
        self.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', self.resize);
    self.resize();

    self.reset = function () {
        // Clear explosions
        self.explosions = [];
    };

    self.add = function (aType, aX, aY) {
        // Create chunks
        var e = {}, s = aZoom * 16, t = s / 3;
        e.img = SC.sprites.sprites[aType];
        e.c7 = new SC.chunk(e.img, aX, aY, 0, 0, 5, 5, aX, aY, t, t);
        e.c8 = new SC.chunk(e.img, aX, aY, 6, 0, 5, 5, aX + t, aY, t, t);
        e.c9 = new SC.chunk(e.img, aX, aY, 11, 0, 5, 5, aX + 2 * t, aY, t, t);
        e.c4 = new SC.chunk(e.img, aX, aY, 0, 6, 5, 5, aX, aY + t, t, t);
        e.c5 = new SC.chunk(e.img, aX, aY, 6, 6, 5, 5, aX + t, aY + t, t, t);
        e.c6 = new SC.chunk(e.img, aX, aY, 11, 6, 5, 5, aX + 2 * t, aY + t, t, t);
        e.c1 = new SC.chunk(e.img, aX, aY, 0, 11, 5, 5, aX, aY + 2 * t, t, t);
        e.c2 = new SC.chunk(e.img, aX, aY, 6, 11, 5, 5, aX + t, aY + 2 * t, t, t);
        e.c3 = new SC.chunk(e.img, aX, aY, 11, 11, 5, 5, aX + 2 * t, aY + 2 * t, t, t);
        e.frame = 0;
        self.explosions.push(e);
    };

    self.render = function () {
        // Render all chunks
        self.context.clearRect(0, 0, self.w, self.h);
        var i, e;
        for (i = self.explosions.length - 1; i >= 0; i--) {
            e = self.explosions[i];
            if (e.frame <= self.fragmentFrames) {
                e.frame++;
                e.c7.update(self.context, aZoom);
                e.c8.update(self.context, aZoom);
                e.c9.update(self.context, aZoom);
                if (self.fragments > 3) {
                    e.c4.update(self.context, aZoom);
                    e.c5.update(self.context, aZoom);
                    e.c6.update(self.context, aZoom);
                    if (self.fragments > 6) {
                        e.c1.update(self.context, aZoom);
                        e.c2.update(self.context, aZoom);
                        e.c3.update(self.context, aZoom);
                    }
                }
            } else {
                self.explosions.splice(i, 1);
            }
        }
    };

    return self;
};

