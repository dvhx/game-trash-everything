// callbacks for testset.html
"use strict";
// globals: document, window

var SC = window.SC || {};
SC.gameLevels = SC.gameLevels || {};

SC.gameLevels.trash1 = {
    requires: 0,
    objective: "Destroy entire library (including walls) in less than a minute! Use on-screen arrows to move and sword button to trash things.",
    time: 60,
    init: function () {
        // player
        SC.player = SC.character('player', 'library', 5, 3, 'boy');
        // lights
        try {
            SC.canvas.bg.style.transition = 'opacity 1s linear';
            SC.canvas.bg.style.opacity = 1;
        } catch (ignore) {
        }
    },
    init2: function () {
        // close doors
        SC.map.change('library', 5, 7, ["floor4", "bars1"], false);
    },
    hit: function (aTile) {
        if (aTile === 'fireplace7' || aTile === 'torchyellow1' || aTile === 'torchyellow3') {
            SC.canvas.bg.style.opacity -= 0.2;
            if (SC.canvas.bg.style.opacity < 0.2) {
                SC.canvas.bg.style.opacity = 0.2;
            }
        }
        return (SC.levelTiles >= 53) || (SC.maps[SC.background.map].ground.join('').replace(/(void|floor4|\,)/g, '') === '');
    },
    fail: function () {
        return SC.timeElapsed > 60000;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    },
    cleanup: function () {
        SC.canvas.bg.style.transition = '';
        SC.canvas.bg.style.opacity = 1;
    }
};

SC.gameLevels.trash2 = {
    requires: 0,
    objective: "Destroy 40 crystals in 60s",
    time: 60,
    init: function () {
        SC.crystalsDestroyed = 0;
        SC.tiles.pot1.walkable = false;
        SC.tiles.pot2.walkable = false;
        SC.tiles.pot3.walkable = false;
        SC.tiles.pot4.walkable = false;
        SC.tiles.crystals.walkable = false;
        SC.player = SC.character('player', 'basement_ken_trash', 21, 17, 'boy');
    },
    hit: function (aTile) {
        if (aTile && aTile.match('torch')) {
            SC.canvas.bg.style.transition = 'opacity 1s linear';
            SC.canvas.bg.style.opacity = 0.2;
        }
        if (aTile === 'crystals') {
            SC.crystalsDestroyed++;
        }
        return (SC.crystalsDestroyed >= 40);
    },
    fail: function () {
        return SC.timeElapsed > 60000;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    },
    cleanup: function () {
        SC.canvas.bg.style.transition = '';
        SC.canvas.bg.style.opacity = 1;
    }
};

SC.gameLevels.trash3 = {
    requires: 0,
    objective: "Break out of prison and destroy it completely in 60s, walls are extra hard!",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'jail2', 6, 2, 'boy');
    },
    hit: function (aTile, aX, aY) {
        if (aTile.match(/(wall)/) && (Math.random() > 0.5)) {
            SC.maps[SC.player.map].ground[aY][aX].push(aTile);
            SC.map.change(SC.player.map, aX, aY, SC.maps[SC.player.map].ground[aY][aX], true);
        }
        return (!SC.maps[SC.background.map].ground.join('').match(/wall/g));
    },
    fail: function () {
        return SC.timeElapsed > 60000;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash4 = {
    requires: 0,
    objective: "Cut 60 trees in 60s",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'forest', 24, 24, 'boy');
        SC.trees = 0;
    },
    hit: function (aTile) {
        if (aTile === 'tree1' || aTile === 'tree2') {
            SC.trees++;
        }
        return SC.trees >= 60;
    },
    fail: function () {
        return SC.timeElapsed > 60000;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.nowalk = function (x, y) {
    // make single cell non-walkable
    SC.maps.ghosttown.ground[y][x].push('nowalk');
};

SC.gameLevels.trash5 = {
    requires: 0,
    objective: "Trim all large weeds on cemetery, make sure you don't damage the tomb stones or anything else!",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'ghosttown', 19, 56, 'boy');
        SC.trees = 0;
        SC.wrongTile = false;
    },
    init2: function () {
        SC.nowalk(4, 54);
        SC.nowalk(4, 56);
        SC.nowalk(4, 57);
        SC.nowalk(5, 58);
        SC.nowalk(7, 59);
        SC.nowalk(8, 59);
        SC.nowalk(9, 59);
        SC.nowalk(14, 60);
        SC.nowalk(15, 60);
        SC.nowalk(16, 60);
        SC.nowalk(17, 60);
    },
    hit: function (aTile) {
        if (aTile !== 'plant') {
            SC.wrongTile = true;
        }
        var x, y, done = true;
        for (x = 5; x <= 17; x++) {
            for (y = 51; y <= 59; y++) {
                if (SC.maps.ghosttown.ground[y][x].indexOf('plant') >= 0) {
                    done = false;
                    break;
                }
            }
        }
        return done;
    },
    fail: function () {
        return (SC.timeElapsed > 60000) || (SC.wrongTile);
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash6 = {
    requires: 0,
    objective: "Trash all books in the library in 20s and nothing else!",
    time: 20,
    init: function () {
        SC.player = SC.character('player', 'library', 5, 3, 'boy');
        SC.books = 0;
        SC.wrongTile = false;
    },
    hit: function (aTile) {
        if (aTile.match('book')) {
            SC.books++;
        } else {
            SC.wrongTile = true;
        }
        return SC.books >= 9;
    },
    fail: function () {
        return (SC.timeElapsed > 20000) || SC.wrongTile;
    },
    stars: function () {
        if (SC.timeElapsed < 10000) {
            return 3;
        }
        if (SC.timeElapsed < 15000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash7 = {
    requires: 0,
    objective: "Cut down 30 decidious trees in 60s and nothing else!",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'forest', 24, 24, 'boy');
        SC.trees = 0;
        SC.wrongTile = false;
    },
    hit: function (aTile) {
        if (aTile === 'tree1') {
            SC.trees++;
        } else {
            SC.wrongTile = true;
        }
        return SC.trees >= 30;
    },
    fail: function () {
        return (SC.timeElapsed > 60000) || SC.wrongTile;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash8 = {
    requires: 0,
    objective: "Take down every painting and nothing else from the gallery (all 3 floors) in 60s!",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'ghosttown', 54, 47, 'boy');
        SC.paintings = 0;
        SC.wrongTile = false;
        SC.map.restoreOriginal('gallery2');
        SC.map.restoreOriginal('gallery3');
    },
    init2: function () {
        SC.player.acceptEvents = true;
    },
    hit: function (aTile) {
        if (aTile === 'painting') {
            SC.paintings++;
        } else {
            SC.wrongTile = true;
        }
        return SC.paintings >= 13;
    },
    fail: function () {
        return (SC.timeElapsed > 60000) || SC.wrongTile;
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash9 = {
    requires: 0,
    objective: "Catch 30 fish in 60 seconds, don't cut more that 5 trees and don't cut anything else!",
    time: 60,
    init: function () {
        SC.player = SC.character('player', 'ghosttown', 67, 64, 'boy');
        SC.fish = 0;
        SC.tree = 0;
        SC.wrongTile = 0;
    },
    init2: function () {
        var x, y;
        for (x = 0; x <= 99; x++) {
            for (y = 0; y <= 99; y++) {
                if (SC.maps.ghosttown.ground[y][x].indexOf('water') >= 0
                        && SC.maps.ghosttown.ground[y][x].indexOf('floor2') < 0
                        && SC.maps.ghosttown.ground[y][x].indexOf('rocks') < 0
                        && SC.maps.ghosttown.ground[y][x].indexOf('fish-up') < 0
                        ) {
                    SC.maps.ghosttown.ground[y][x].push('fish-up');
                }
            }
        }
        SC.background.key = '';
    },
    hit: function (aTile) {
        if (aTile === 'fish-up') {
            SC.fish++;
        } else if (aTile.match('tree')) {
            SC.tree++;
        } else {
            SC.wrongTile++;
        }
        return SC.fish >= 30;
    },
    fail: function () {
        return (SC.timeElapsed > 60000) || (SC.wrongTile > 0) || (SC.tree > 5);
    },
    stars: function () {
        if (SC.timeElapsed < 40000) {
            return 3;
        }
        if (SC.timeElapsed < 50000) {
            return 2;
        }
        return 1;
    }
};

SC.gameLevels.trash10 = {
    requires: 0,
    objective: "Destroy every building in town center in less than 300s!",
    time: 300,
    init: function () {
        SC.player = SC.character('player', 'ghosttown', 51, 50, 'boy');
    },
    hit: function () {
        var x, y, done = true, g, i, bad = {wall1: 1, wall2: 1, wall3: 1, wall4: 1, brick1: 1, brick2: 1, brick3: 1, brick4: 1, floor1: 1, floor2: 1, carpet: 1, carpet1: 1, carpet3: 1, carpet7: 1, carpet9: 1};
        // check if town center was cleared of bad tiles
loop1:
        for (x = 37; x <= 60; x++) {
            for (y = 48; y <= 62; y++) {
                g = SC.maps.ghosttown.ground[y][x];
                for (i = 0; i < g.length; i++) {
                    if (bad.hasOwnProperty(g[i])) {
                        done = false;
                        break loop1;
                    }
                }
            }
        }
loop2:
        for (x = 43; x <= 60; x++) {
            for (y = 40; y <= 46; y++) {
                g = SC.maps.ghosttown.ground[y][x];
                for (i = 0; i < g.length; i++) {
                    if (bad.hasOwnProperty(g[i])) {
                        done = false;
                        break loop2;
                    }
                }
            }
        }
        return done;
    },
    fail: function () {
        return (SC.timeElapsed > 300000);
    },
    stars: function () {
        if (SC.timeElapsed < 100000) {
            return 3;
        }
        if (SC.timeElapsed < 200000) {
            return 2;
        }
        return 1;
    }
};

