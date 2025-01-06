// Stars for levels and achievements
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.stars = (function () {
    var self = {};
    self.stars = SC.storage.readObject('SC.stars.stars', {});

    function save() {
        // Save stars to storage
        SC.storage.writeObject('SC.stars.stars', self.stars);
    }

    self.sum = function () {
        // Return sum of stars
        var k, s = 0;
        for (k in self.stars) {
            if (self.stars.hasOwnProperty(k)) {
                s += self.stars[k] || 0;
            }
        }
        return s;
    };

    self.add = function (aLevel, aStars) {
        // Set stars for level (only if it is higher then it was before)
        self.stars[aLevel] = self.stars[aLevel] || 0;
        if (aStars > self.stars[aLevel]) {
            self.stars[aLevel] = aStars;
            save();
        }
    };

    self.render = function (aCount, aAnimate, aSoundYes, aSoundNo) {
        // Render 3 stars (colored by count)
        var stdiv, star1, star2, star3;

        stdiv = document.createElement('div');
        stdiv.className = 'gt_stars';

        star1 = document.createElement('span');
        star1.textContent = '⭐';
        stdiv.appendChild(star1);

        star2 = document.createElement('span');
        star2.textContent = '⭐';
        stdiv.appendChild(star2);

        star3 = document.createElement('span');
        star3.textContent = '⭐';
        stdiv.appendChild(star3);

        function one(aElement, aPosition) {
            // Animate one star appearance and play sound
            setTimeout(function () {
                aElement.className = aCount >= aPosition ? 'on' : 'off';
                if (aCount >= aPosition) {
                    if (aSoundYes) {
                        SC.sound.play(aSoundYes);
                    }
                } else {
                    if (aSoundNo) {
                        SC.sound.play(aSoundNo);
                    }
                }
            }, 500 * aPosition);
        }

        if (aAnimate) {
            one(star1, 1);
            one(star2, 2);
            one(star3, 3);
        } else {
            star1.className = aCount >= 1 ? 'on' : 'off';
            star2.className = aCount >= 2 ? 'on' : 'off';
            star3.className = aCount >= 3 ? 'on' : 'off';
        }
        return stdiv;
    };

    return self;
}());

