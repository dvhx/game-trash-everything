// Fullscreen mobile map editor
// linter: lint-js2
/*global document, window */

var SC = window.SC || {};

SC.editor = (function () {
    // Editor
    "use strict";
    var self = {};
    var LEFT = 1;
    var RIGHT = 2;
    var UP = 4;
    var DOWN = 8;
    var div;
    var nav;
    var drawer;
    var drawerTiles = {};
    var tileHelp = false;
    self.labels = {};

    self.fakeInventory = function () {
        // Inventory with every tile in it
        var k;
        var o = {};
        for (k in SC.tiles) {
            if (SC.tiles.hasOwnProperty(k)) {
                if (k.match(/^(invisible|boy|girl|ghost|spider|slime|frog|rat|skeleton|bat|nw_)/)) {
                    continue;
                }
                if (k.match(/^t[0-9]+$/)) {
                    continue;
                }
                /*
                if (k.match(/^sls[0-9]+$/)) {
                    continue;
                }
                */
                o[k] = 99;
            }
        }
        return o;
    };

    self.guessEdge = function (aMap, aX, aY, aFast) {
        // guess correct edge based on tile walkability
        var map = typeof aMap === "string" ? SC.maps[aMap] : aMap;
        var w = SC.map.walkableTileInCell(map, aX, aY);
        if (w) {
            map.edge[aY - 1][aX] &= ~DOWN;
            map.edge[aY + 1][aX] &= ~UP;
            map.edge[aY][aX - 1] &= ~RIGHT;
            map.edge[aY][aX + 1] &= ~LEFT;
        } else {
            map.edge[aY - 1][aX] |= DOWN;
            map.edge[aY + 1][aX] |= UP;
            map.edge[aY][aX - 1] |= RIGHT;
            map.edge[aY][aX + 1] |= LEFT;
        }
        // force background redraw
        if (!aFast) {
            SC.background.cell(map, aX - 1, aY);
            SC.background.cell(map, aX + 1, aY);
            SC.background.cell(map, aX, aY - 1);
            SC.background.cell(map, aX, aY + 1);
            SC.background.key = "";
            // log edge change
            SC.map.logEdge(map.name, aX - 1, aY);
            SC.map.logEdge(map.name, aX + 1, aY);
            SC.map.logEdge(map.name, aX, aY - 1);
            SC.map.logEdge(map.name, aX, aY + 1);
            SC.map.saveEdge();
        }
    };

    self.cancel = function () {
        // stop placing tiles when user click
        self.cancel = "";
        //delete SC.canvas.char.onclick;
    };

    self.show = function (aInventory) {
        // create drawer with inventory tiles and numbers and fixed controls on top
        if (!SC.canvas || !SC.canvas.char) {
            return;
        }
        var oldAC = SC.background.autoclear;
        self.inventory = aInventory;
        SC.canvas.char.onclick = self.onMapClick;
        if (!div) {
            div = document.createElement("div");
            div.className = "gt_editor";
            div.innerHTML = `
                <nav>
                    <button class="back">Back</button>
                    <button class="pick">Pick</button>
                    <button class="wall">Wall</button>
                    <button class="done">Done</button>
                </nav>
                <div class="note">You can buy more tiles in shops</div>
                <div class="drawer">
                </div>
                `;
            nav = div.getElementsByTagName("nav")[0];
            drawer = div.getElementsByClassName("drawer")[0];
            document.body.appendChild(div);
            // tiles
            var t;
            var tiles = aInventory.keys().sort();
            for (t = 0; t < tiles.length; t++) {
                if (tiles[t] !== "gold") {
                    self.drawerTile(tiles[t]);
                }
            }
            // back button
            nav.querySelector(".back").onclick = self.hide;
            // pick button
            nav.querySelector(".pick").dataName = "PICK";
            nav.querySelector(".pick").onclick = function () {
                self.current = "PICK";
                self.hide();
                SC.bubblesCasual(SC.characters.player.name, ["Tap on map to pick tiles"]);
            };
            // wall button
            nav.querySelector(".wall").onclick = function () {
                var wh = SC.player.wallhack();
                if (wh) {
                    SC.background.autoclear = true;
                    SC.bubblesCasual(SC.characters.player.name, ["Walls visible"]);
                } else {
                    SC.background.autoclear = oldAC;
                    SC.bubblesCasual(SC.characters.player.name, ["Walls hidden"]);
                }
                self.hide();
            };
            // done button
            nav.querySelector(".done").onclick = function () {
                SC.player.wallhack(false);
                SC.background.autoclear = oldAC;
                self.current = "";
                self.hide();
            };
        } else {
            // update numbers (user might get new tiles in shop)
            var tt;
            /*
            Object.keys(self.labels).forEach(function (a) {
                self.labels[a].textContent = aInventory.amount(a) + "x";
            });
            */
            for (tt in self.labels) {
                if (self.labels.hasOwnProperty(tt)) {
                    self.labels[tt].textContent = aInventory.amount(tt) + "x";
                }
            }
            // add new tiles
            for (tt in aInventory.items) {
                if (aInventory.items.hasOwnProperty(tt) && !self.labels.hasOwnProperty(tt)) {
                    if (tt !== "gold") {
                        //console.log('new tile', tt);
                        self.drawerTile(tt);
                    }
                }
            }
        }
        div.getElementsByClassName("note")[0].style.display = aInventory.keys().length <= 1 ? "block" : "none";
        div.style.display = "flex";
    };

    self.hide = function () {
        // hide drawer
        div.style.display = "none";
    };

    self.onTileClick = function (event) {
        var c = div.getElementsByClassName("current");
        var tile_element = event.target.classList.contains("tile") ? event.target : event.target.parentElement;
        var name = tile_element.dataName;
        //console.log(tile_element);

        if (c.length > 0) {
            c[0].classList.remove("current");
        }
        tile_element.classList.add("current");
        //console.log(name);
        self.hide();
        self.current = name;
        // show help once
        if (!tileHelp) {
            SC.bubblesCasual(SC.characters.player.name, ["Tap on map to drop " + self.current]);
        }
        tileHelp = true;
    };

    self.onMapClick = function (event) {
        // click on map
        var x = Math.floor(event.clientX / SC.size / SC.canvas.zoom) + SC.canvas.viewport.x;
        var y = Math.floor(event.clientY / SC.size / SC.canvas.zoom) + SC.canvas.viewport.y;
        var g;
        var picked;
        //console.log("onMapClick", x, y, "current", self.current, "client", event.clientX, event.clientY);

        // too close to map edge
        if (x <= 0 || y <= 0 || x >= SC.maps[SC.background.map].width - 1 || y >= SC.maps[SC.background.map].height - 1) {
            console.warn("map edge not editable");
            return;
        }

        // none
        if (!self.current) {
            return;
        }

        // pick tile
        if (self.current === "PICK") {
            // pick top tile
            g = SC.maps[SC.background.map].ground[y][x].slice();
            picked = g.pop();
            // make sure drawer tile for it exists
            if (!drawerTiles.hasOwnProperty(picked)) {
                self.drawerTile(picked);
            }
            // return it to inventory
            self.inventory.add(picked, 1);
            //console.log("inventory", picked, self.inventory.amount(picked));
            self.labels[picked].textContent = self.inventory.amount(picked) + "x";
            // replace empty ground with grass
            if (g.length === 0) {
                g = ["grass1"];
            }
            // update ground
            SC.map.change(SC.player.map, x, y, g, false);
            // update edge
            self.guessEdge(SC.player.map, x, y);
            return;
        }

        // add tile
        if (!self.inventory.has(self.current)) {
            SC.bubblesCasual(SC.characters.player.name, ["No more " + self.current]);
            return;
        }
        // remove from inventory
        self.inventory.remove(self.current, 1);
        self.labels[self.current].textContent = self.inventory.amount(self.current) + "x";
        // add to ground
        g = SC.maps[SC.background.map].ground[y][x].slice();
        if (self.current) {
            g.push(self.current);
        }
        // update ground
        SC.map.change(SC.player.map, x, y, g, false);
        // update edge
        self.guessEdge(SC.player.map, x, y);
    };

    self.drawerTile = function (aTileName) {
        // create single canvas tile in drawer
        var o = SC.tiles[aTileName];
        var tile;
        var can;
        var ctx;
        var a;
        tile = document.createElement("div");
        tile.className = "tile";
        can = document.createElement("canvas");
        can.width = SC.size;
        can.height = SC.size;
        tile.appendChild(can);
        ctx = can.getContext("2d");
        ctx.imageSmoothingEnabled = false;
        if (o.image) {
            ctx.drawImage(o.image, o.x, o.y, SC.size, SC.size, 0, 0, SC.size, SC.size);
            window.ctx = ctx;
            a = document.createElement("label");
            a.textContent = self.inventory.amount(aTileName) + "x";
            tile.appendChild(a);
            self.labels[aTileName] = a;
        } else {
            console.warn("image not ready", aTileName);
        }
        tile.className = "tile";
        tile.dataName = aTileName;
        tile.onclick = self.onTileClick;
        drawerTiles[aTileName] = tile;
        drawer.appendChild(tile);
    };

    return self;
}());

