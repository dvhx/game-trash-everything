// Maps journal (changes, persistence) and overlapping
"use strict";
// globals: document, window

var SC = window.SC || {};

SC.map = (function () {
    // Maps journal (changes, persistence) and overlapping
    var self = {};
    self.journal = SC.storage.readObject('SC.map.journal', {});
    self.journalEdge = SC.storage.readObject('SC.map.journalEdge', {});
    self.original = {};

    self.save = function () {
        // Save journal to local storage
        SC.storage.writeObject('SC.map.journal', self.journal);
    };

    self.saveEdge = function () {
        // Save edge journal to local storage
        SC.storage.writeObject('SC.map.journalEdge', self.journalEdge);
    };

    // remember original transient maps
    (function () {
        var m;
        for (m in SC.maps) {
            if (SC.maps.hasOwnProperty(m)) {
                if (SC.maps[m].transient) {
                    self.original[m] = JSON.parse(JSON.stringify(SC.maps[m]));
                }
            }
        }
    }());

    function replay() {
        // Replay journal on maps
        var m, xy, x, y;
        // all maps
        for (m in self.journal) {
            if (self.journal.hasOwnProperty(m)) {
                if (!SC.maps.hasOwnProperty(m)) {
                    console.warn('Cannot replay journal for map ' + m);
                    continue;
                }
                // do not replay transient maps (e.g. levels that are repeated always the same)
                if (SC.maps[m].transient) {
                    self.original[m] = JSON.parse(JSON.stringify(SC.maps[m]));
                    continue;
                }
                // all cells
                for (xy in self.journal[m]) {
                    if (self.journal[m].hasOwnProperty(xy)) {
                        x = xy.split(' ')[0];
                        y = xy.split(' ')[1];
                        SC.maps[m].ground[y][x] = self.journal[m][xy];
                    }
                }
            }
        }
        // edge
        for (m in self.journalEdge) {
            if (self.journalEdge.hasOwnProperty(m)) {
                if (!SC.maps.hasOwnProperty(m)) {
                    console.warn('Cannot replay journalEdge for map ' + m);
                    continue;
                }
                // do not replay transient maps (e.g. levels that are repeated always the same)
                if (SC.maps[m].transient) {
                    continue;
                }
                // all cells
                for (xy in self.journalEdge[m]) {
                    if (self.journalEdge[m].hasOwnProperty(xy)) {
                        x = xy.split(' ')[0];
                        y = xy.split(' ')[1];
                        SC.maps[m].edge[y][x] = self.journalEdge[m][xy];
                    }
                }
            }
        }
    }
    console.log('maps before replay', SC.maps);
    replay();

    function log(aMap, aX, aY) {
        // Add map change to journal
        var map_name = typeof aMap === 'string' ? aMap : aMap.name;
        if (SC.maps[map_name].transient) {
            return;
        }
        if (!self.journal.hasOwnProperty(map_name)) {
            self.journal[map_name] = {};
        }
        self.journal[map_name][aX + ' ' + aY] = SC.maps[map_name].ground[aY][aX];
    }

    self.change = function (aMap, aX, aY, aTiles, aFast) {
        // Change tiles on give position
        var map = typeof aMap === 'string' ? SC.maps[aMap] : aMap;
        if (typeof aTiles === 'string') {
            map.ground[aY][aX].push(aTiles);
        } else {
            map.ground[aY][aX] = aTiles;
        }
        log(aMap, aX, aY);
        if (map.name === SC.background.map) {
            SC.background.cell(map, aX, aY, self.debugDraw);
            if (!aFast) {
                SC.background.key = '';
                self.save();
            }
        }
    };

    self.logEdge = function (aMap, aX, aY) {
        // add change to edge journal
        var map_name = typeof aMap === 'string' ? aMap : SC.maps[aMap].name;
        if (!self.journalEdge.hasOwnProperty(map_name)) {
            self.journalEdge[map_name] = {};
        }
        self.journalEdge[map_name][aX + ' ' + aY] = SC.maps[map_name].edge[aY][aX];
    };

    self.changeArea = function (aMap, aX1, aY1, aX2, aY2, aTiles, aFast) {
        // Change rectangular area in map
        var x, y;
        for (x = aX1; x <= aX2; x++) {
            for (y = aY1; y <= aY2; y++) {
                self.change(aMap, x, y, aTiles, true);
            }
        }
        if (!aFast) {
            SC.background.key = '';
            self.save();
        }
    };

    self.checkSubmap = function (aCharacter) {
        // Check if character is near edge, if so move to neigbouring map
        var future_map,
            map = SC.maps[aCharacter.map];
        //console.log('checkSubmap', aCharacter, map, future_map);
        if (map.overlapTriggers) {
            // right
            if (aCharacter.x === map.overlapTriggers.right) {
                console.warn('OT right', SC.maps[aCharacter.map].neighbours.right);
                aCharacter.teleport(SC.maps[aCharacter.map].neighbours.right, 10, aCharacter.y, 'right');
            }
            // left
            if (aCharacter.x === map.overlapTriggers.left) {
                console.warn('OT left', SC.maps[aCharacter.map].neighbours.left);
                future_map = SC.maps[SC.maps[aCharacter.map].neighbours.left];
                aCharacter.teleport(SC.maps[aCharacter.map].neighbours.left, future_map.width - 10, aCharacter.y, 'left');
            }
            // up
            if (aCharacter.y === map.overlapTriggers.up) {
                console.warn('OT up', SC.maps[aCharacter.map].neighbours.up);
                future_map = SC.maps[SC.maps[aCharacter.map].neighbours.up];
                aCharacter.teleport(SC.maps[aCharacter.map].neighbours.up, aCharacter.x, future_map.height - 10, 'up');
            }
            // down
            if (aCharacter.y === map.overlapTriggers.down) {
                console.warn('OT down', SC.maps[aCharacter.map].neighbours.down);
                aCharacter.teleport(SC.maps[aCharacter.map].neighbours.down, aCharacter.x, 10, 'down');
            }
        }
    };

    self.walkableTileInCell = function (aMap, aX, aY) {
        // Slow function to test if cell is walkable
        var i, tiles = aMap.ground[aY][aX];
        for (i = 0; i < tiles.length; i++) {
            if (!SC.tiles[tiles[i]].walkable) {
                return false;
            }
        }
        return true;
    };

    self.npc = function (aMap, aNpc) {
        // Place NPC from object layer to map and orient them
        var n = SC.maps[aMap].npc[aNpc], ch;
        if (!n) {
            console.error('map "' + aMap + '" has no npc "' + aNpc + '"');
        }
        ch = SC.character(n.name, aMap, n.x, n.y, n.base);
        ch.acceptEvents = false;
        ch.turn(n.dir);
        ch.acceptEvents = true;
        return ch;
    };

    self.restoreOriginal = function (aMap) {
        // Restore transient map into its original form
        if (self.original.hasOwnProperty(aMap)) {
            SC.maps[aMap] = JSON.parse(JSON.stringify(self.original[aMap]));
            if (SC.background.map === aMap) {
                SC.background.load(aMap);
                SC.background.key = '';
            }
        } else {
            console.warn(aMap, 'is not a transient map');
        }
    };

    self.edge2clear = function (aMap) {
        // Create zero copy of edge for character collisions
        if (SC.characters && SC.characters.occupied) {
            aMap.edge2 = aMap.edge.map(function (x) { return x.map(function () { return 0; }); });
        }
    };

    self.edge2add = function (aMap, aX, aY) {
        // Add obstacle to edge2
        var LEFT = 1, RIGHT = 2, UP = 4, DOWN = 8;
        // FIXME: handle cases near end of map
        aMap.edge2[aY - 1][aX] |= DOWN;
        aMap.edge2[aY + 1][aX] |= UP;
        aMap.edge2[aY][aX - 1] |= RIGHT;
        aMap.edge2[aY][aX + 1] |= LEFT;
    };

    return self;
}());

