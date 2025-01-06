// Hits, attacks and other temporary character based effects
"use strict";
// globals: document, window, setTimeout

var SC = window.SC || {};

SC.effect = function (aCharacter, aTilesAndDurations) {
    // Create single effect for a character (tiles: ['hit1', 300, 'hit2', 700])
    var self = {},
        elapsed = 0,
        oldTime = SC.time,
        tiles = aTilesAndDurations.slice();
    self.tile = tiles[0];
    if (!aCharacter) {
        throw "Undefined character " + aTilesAndDurations;
    }

    self.update = function () {
        // Update effect
        self.tile = '';
        if (tiles.length > 0) {
            self.tile = tiles[0];
            elapsed += SC.time - oldTime;
            oldTime = SC.time;
            if (elapsed > tiles[1]) {
                tiles.shift();
                tiles.shift();
                elapsed = 0;
            }
        }
    };

    self.draw = function (aContext) {
        // Draw effect
        if (self.tile) {
            var t = SC.tiles[self.tile];
            if (!t) {
                console.error('Cannot draw ' + self.tile);
                return;
            }
            if (!aCharacter.clip) {
                console.error('Character without clip:', aCharacter);
                return;
            }
            aContext.drawImage(t.image,
                t.x, t.y, SC.size, SC.size,
                aCharacter.clip.x, aCharacter.clip.y,
                aCharacter.clip.w, aCharacter.clip.h
                );
        }
    };

    return self;
};

SC.effects = (function () {
    // Effects manager
    var self = {};
    self.effects = [];
    self.t = 0;

    self.hit = function (aCharacter) {
        // Add new effect animating receiving hit of character
        self.effects.push(SC.effect(aCharacter, ['hit1', 100, 'hit2', 100, 'hit3', 100, 'hit4', 100]));
    };

    self.attack = function (aCharacter) {
        // Add new effect animating attack of a character
        var d;
        if (!aCharacter) {
            return;
        }
        switch (aCharacter.dir) {
        case "left":
        case "right":
        case "up":
        case "down":
            d = aCharacter.dir;
            break;
        default:
            d = "down";
        }
        self.effects.push(SC.effect(aCharacter, ['attack' + d + '1', 100, 'attack' + d + '2', 120]));
    };

    self.magic = function (aCharacter, aCallback) {
        // Simple magic sparkling effect
        self.effects.push(SC.effect(aCharacter, [
            'magic1', 100, 'magic2', 100, 'magic3', 100, 'magic4', 100,
            'magic1', 100, 'magic2', 100, 'magic3', 100, 'magic4', 100,
            'magic1', 100, 'magic2', 100, 'magic3', 100, 'magic4', 100,
            'magic1', 100, 'magic2', 100, 'magic3', 100, 'magic4', 100
        ]));
        if (aCallback) {
            setTimeout(aCallback, 1600 + 300);
        }
    };

    self.update = function () {
        // Update all effects, remove old effects, return key
        var i, key = [];
        for (i = self.effects.length - 1; i >= 0; i--) {
            self.effects[i].update();
            key.push(self.effects[i].tile);
            if (!self.effects[i].tile) {
                self.effects.splice(i, 1);
            }
        }
        return key.join(',');
    };

    self.draw = function (aContext) {
        // Draw all effects
        var i;
        for (i = 0; i < self.effects.length; i++) {
            self.effects[i].draw(aContext);
        }
    };

    self.blink = function (aElement) {
        // Shortly blink HTML element by changing opacity so that player will notice it
        aElement.style.opacity = 1;
        aElement.style.transition = 'opacity 0.1s linear';
        setTimeout(function () {
            aElement.style.opacity = 0.5;
        }, 100);
        setTimeout(function () {
            aElement.style.opacity = 1;
        }, 200);
        setTimeout(function () {
            aElement.style.opacity = 0.5;
        }, 300);
        setTimeout(function () {
            aElement.style.opacity = 1;
        }, 400);
    };

    return self;
}());

