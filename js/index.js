// Main window
// linter: ngspicejs-lint
// global: document, window, console
"use strict";

var SC = window.SC || {};

SC.pause = true;
SC.playerStars = SC.storage.readObject('SC.playerStars', {});

SC.characters.singleTileCharacter('invisible');

SC.customLoop = function () {
    // Rendering loop
    SC.customLoopRunning = true;
    SC.render();
    SC.explosions.render();
    window.requestAnimationFrame(SC.customLoop);
};

SC.undestructable = {
    "grass1": 1,
    "downstairs": 1,
    "upstairs": 1,
    "water": 1,
    "water1": 1,
    "mine": 1,
    "void": 1,
    "mud": 1,
    "shore1": 1,
    "shore2": 1,
    "shore3": 1,
    "shore4": 1,
    "shore5": 1,
    "shore6": 1,
    "shore7": 1,
    "shore8": 1,
    "shore9": 1,
    "cavewall": 1,
    "cavewalldark": 1,
    "shadow1": 1,
    "shadow2": 1,
    "shadow3": 1,
    "shadow3c": 1,
    "shadow4": 1,
    "shadow5": 1,
    "shadown9": 1,
    "road1": 1,
    "road2": 1,
    "road3": 1,
    "road4": 1,
    "road5": 1,
    "road6": 1,
    "road7": 1,
    "road8": 1,
    "road9": 1,
    "road0": 1,
    "road1c": 1,
    "road3c": 1,
    "road7c": 1,
    "road9c": 1,
    "stair1": 1,
    "waterfall": 1,
    "floor3": 1,
    "floor4": 1,
    "nowalk": 1,
    "water2": 1
};

SC.progressive = {
    "grass4": "grass3",
    "grass3": "grass2",
    "grass2": "grass1",
    "pot1": "pot2",
    "pot2": "pot3",
    "pot3": "pot4",
    "chest1": "chest2",
    "chest2": "chest3",
    "chest3": "chest4"
};

SC.base = {
    "basement_ken": "mud",
    "basement_town_hall": "mud",
    "gallery2": "grass1",
    "gallery3": "grass1",
    "ghosttown": "grass1",
    "jail2": "floor3",
    "library": "floor4",
    "quarry": "mud",
    "tomb": "mud"
};

SC.onTouchStartAttack = function (event) {
    SC.attacking = true;
    //event.preventDefault();
    event.cancelBubble = true;
    SC.onAttack();
};

SC.onTouchEndAttack = function (event) {
    SC.attacking = false;
    //event.preventDefault();
    event.cancelBubble = true;
};

SC.onAttack = function () {
    // attack tile in front or under
    if (SC.pause) {
        return;
    }
    if (!SC.editor) {
        return;
    }
    if (Date.now() - SC.attackTime < 200) {
        return;
    }
    if (!SC.player || !SC.player.clip) {
        return;
    }
    SC.attackTime = Date.now();
    SC.effects.attack(SC.player);
    SC.sound.playGroup('knife');
    // detect forward cell coordinates
    //console.log('xy', SC.player.x, SC.player.y, 'r', SC.player.rx, SC.player.ry, 'f', Math.round(SC.player.rx), Math.round(SC.player.ry));
    var i, di, dt, fx = Math.round(SC.player.rx), fy = Math.round(SC.player.ry), g, cx = SC.player.clip.x + 4, cy = SC.player.clip.y + 4, buttons, stars;
    switch (SC.player.dir) {
    case "left":
        fx--;
        cx -= 16 * SC.canvas.zoom;
        break;
    case "right":
        fx++;
        cx += 16 * SC.canvas.zoom;
        break;
    case "up":
        fy--;
        cy -= 16 * SC.canvas.zoom;
        break;
    case "down":
        fy++;
        cy += 16 * SC.canvas.zoom;
        break;
    }
    // not edge
    if (fx < 1 || fy < 1 || fx >= SC.maps[SC.player.map].width - 1 || fy >= SC.maps[SC.player.map].height - 1) {
        return;
    }
    // find topmost destructable
    dt = '';
    di = -1;
    g = SC.maps[SC.player.map].ground[fy][fx];
    for (i = g.length - 1; i >= 0; i--) {
        if (!SC.undestructable.hasOwnProperty(g[i])) {
            di = i;
            dt = g[i];
            break;
        }
    }
    // if nothing in front use current tile
    if (di < 0) {
        fx = Math.round(SC.player.rx);
        fy = Math.round(SC.player.ry);
        cx = SC.player.clip.x + 4;
        cy = SC.player.clip.y + 4;
        g = SC.maps[SC.player.map].ground[fy][fx];
        for (i = g.length - 1; i >= 0; i--) {
            if (!SC.undestructable.hasOwnProperty(g[i])) {
                di = i;
                dt = g[i];
                break;
            }
        }
    }

    //console.log('topmost', g, di, dt);
    // destructable tile found
    if (di >= 0) {
        if (SC.progressive.hasOwnProperty(dt)) {
            // replace progressive
            g[di] = SC.progressive[dt];
        } else {
            // remove it
            // console.log('hit', dt);
            g.splice(di, 1);
            SC.levelTiles++;
            SC.lastTile = dt;
            // check objective
            if (SC.level.hit && SC.level.hit(dt, fx, fy)) {
                SC.background.key = '';
                SC.render();
                SC.pause = true;
                buttons = ['Menu', 'Replay'];
                stars = SC.level.stars();
                SC.stars.add(SC.levelName, stars);
                SC.splash('Level #' + SC.levelIndex + ' completed!', buttons, 'lime', 'You trashed ' + SC.levelTiles + ' items in ' + (SC.timeElapsed / 1000).toFixed(1) + 's. You got ' + '⭐⭐⭐'.substr(0, stars) + ' for your effort.', SC.onSplashButtons, '80vw').bgClickDisable();
                SC.lip1.hide();
                SC.storage.writeNumber('SC.singleLevel', SC.levelIndex + 1);
                if (SC.level.cleanup) {
                    SC.level.cleanup();
                }
            }
        }
        if (g.length === 0) {
            g = [SC.base.hasOwnProperty(SC.player.map) ? SC.base[SC.player.map] : 'grass1'];
        }
        if (SC.sound.sound.hasOwnProperty(dt)) {
            SC.sound.play(dt);
        } else {
            console.log('nosound', dt);
        }
        SC.sprites.add(dt);
        if (!SC.progressive.hasOwnProperty(dt)) {
            SC.explosions.add(dt, cx, cy);
        }
        SC.editor.guessEdge(SC.player.map, fx, fy, true);
        SC.map.change(SC.player.map, fx, fy, g, true);
        SC.background.key = '';
    }
};

SC.onKeyDown = function (event) {
    if (!SC.pause && event.key === ' ') {
        SC.onAttack();
        SC.attacking = true;
    }
    if (event.key === 'Escape') {
        SC.pause = true;
        SC.lip1.hide();
        SC.gameMenu();
    }
};

SC.onKeyUp = function (event) {
    if (!SC.pause && event.key === ' ') {
        SC.attacking = false;
    }
};

SC.startLevel = function (aLevel) {
    // Start specific level
    SC.pause = true;

    SC.levelIndex = parseInt(aLevel.match(/[0-9]+/)[0], 10);
    SC.levelName = aLevel;

    SC.attacking = false;
    SC.levelTiles = 0;
    SC.characters.clear();

    SC.level = SC.gameLevels[aLevel];
    SC.level.init();
    SC.map.restoreOriginal(SC.player.map);
    SC.player.setPlayer();
    SC.player.acceptEvents = false;
    // background
    SC.background.load(SC.player.map);
    SC.background.key = '';
    // rendering loop
    if (!SC.customLoopRunning) {
        SC.customLoop();
    }
    if (SC.level.init2) {
        SC.level.init2();
    }
    SC.splash('Level ' + SC.levelIndex, ['Play'], 'skyblue', SC.level.objective, function () {
        SC.lip1 = SC.lip(SC.level.time + 's', undefined, SC.level.time);
        SC.lip1.close.style.display = 'none';
        SC.timeElapsed = 0;
        SC.timeOld = 0;
        SC.pause = false;
    }, '80vw').bgClickDisable();
};

SC.gameMenu = function () {
    // Show menu with all levels
    SC.levels('Trash everything', 'image/sword32.png', 'image/sword32.png', 'image/menu.jpg',
        SC.gameLevels,
        SC.stars.stars,
        SC.startLevel);
};

SC.onSplashButtons = function (aButton) {
    // splash buttons handler
    console.log('SC.onSplashButtons', aButton);
    switch (aButton) {
    case "Replay":
        SC.startLevel(SC.levelName);
        return;
    case "Menu":
        SC.gameMenu();
        return;
    default:
        SC.gameMenu();
        return;
    }
};

// initialize window
window.addEventListener('DOMContentLoaded', function () {
    //SC.sound.volume(0.3);
    SC.explosions = SC.explosions('explosion_canvas', 2);

    // sounds
    SC.sound.addGroup('knife', 4, 2);
    SC.sound.add('bars1', 2);
    SC.sound.add('bars2', 2);
    SC.sound.add('bars3', 2);
    SC.sound.add('bars4', 2);
    SC.sound.add('booksmall', 2);
    SC.sound.add('books1', 2);
    SC.sound.add('books2', 2);
    SC.sound.add('books3', 2);
    SC.sound.add('brick1', 2);
    SC.sound.add('brick2', 2);
    SC.sound.add('brick3', 2);
    SC.sound.add('brick4', 2);
    SC.sound.add('door1', 2);
    SC.sound.add('door2', 2);
    SC.sound.add('door3', 2);
    SC.sound.add('door4', 2);
    SC.sound.add('floor1', 2);
    SC.sound.add('floor1', 2);
    SC.sound.add('list', 2);
    SC.sound.add('painting', 2);
    SC.sound.add('pot1', 2);
    SC.sound.add('pot2', 2);
    SC.sound.add('pot3', 2);
    SC.sound.add('pot4', 2);
    SC.sound.add('throne', 2);
    SC.sound.add('tree1', 2);
    SC.sound.add('tree2', 2);
    SC.sound.add('wall1', 2);
    SC.sound.add('wall2', 2);
    SC.sound.add('wall3', 2);
    SC.sound.add('wall4', 2);
    SC.sound.add('barrierup', 2);
    SC.sound.add('bedbottom', 2);
    SC.sound.add('bedtop', 2);
    SC.sound.add('blanket', 2);
    SC.sound.add('carpet1', 2);
    SC.sound.add('carpet3', 2);
    SC.sound.add('carpet5', 2);
    SC.sound.add('carpet7', 2);
    SC.sound.add('carpet9', 2);
    SC.sound.add('cabinet', 2);
    SC.sound.add('cabinet-up', 2);
    SC.sound.add('pilebrown', 2);
    SC.sound.add('pilewhite', 2);
    SC.sound.add('wellwater', 2);
    SC.sound.add('columnbroken', 2);
    SC.sound.add('grass2', 2);
    SC.sound.add('grass3', 2);
    SC.sound.add('grass4', 2);
    SC.sound.add('herb-ground', 2);
    SC.sound.add('plant', 2);
    SC.sound.add('rocks', 2);
    SC.sound.add('fence1', 2);
    SC.sound.add('fence2', 2);
    SC.sound.add('crystals', 2);
    SC.sound.add('chest1', 2);
    SC.sound.add('chest2', 2);
    SC.sound.add('chest3', 2);
    SC.sound.add('chest4', 2);
    SC.sound.add('fish-up', 2);
    SC.sound.add('sign', 2);
    SC.sound.add('statue', 2);
    SC.sound.add('table', 2);
    SC.sound.add('tombstone', 2);
    SC.sound.add('fireplace7', 2);
    SC.sound.add('torchyellow1', 2);
    SC.sound.add('torchyellow2', 2);
    SC.sound.add('torchyellow3', 2);
    SC.sound.add('trashcan', 2);
    SC.sound.add('well', 2);
    SC.sound.add('stair1', 2);
    SC.sound.add('cavewall', 2);
    SC.sound.add('floor2', 2);
    SC.sound.add('floor2', 2);
    SC.sound.add('road1c', 2);
    SC.sound.add('road1', 2);
    SC.sound.add('road2', 2);
    SC.sound.add('road3c', 2);
    SC.sound.add('road3', 2);
    SC.sound.add('road4', 2);
    SC.sound.add('road5', 2);
    SC.sound.add('road6', 2);
    SC.sound.add('road7c', 2);
    SC.sound.add('road7', 2);
    SC.sound.add('road8', 2);
    SC.sound.add('road9c', 2);
    SC.sound.add('road9', 2);
    SC.sound.add('shore1', 2);
    SC.sound.add('shore2', 2);
    SC.sound.add('shore3', 2);
    SC.sound.add('shore4', 2);
    SC.sound.add('shore5', 2);
    SC.sound.add('shore6', 2);
    SC.sound.add('shore7', 2);
    SC.sound.add('shore8', 2);
    SC.sound.add('shore9', 2);


    // attack button
    document.getElementById('attack').ontouchstart = SC.onTouchStartAttack;
    document.getElementById('attack').ontouchend = SC.onTouchEndAttack;
    document.getElementById('attack').onmousedown = SC.onTouchStartAttack;
    document.getElementById('attack').onmouseup = SC.onTouchEndAttack;
    window.addEventListener('keydown', SC.onKeyDown, true);
    window.addEventListener('keyup', SC.onKeyUp, true);

    SC.gameMenu();
    // Initialize town
    SC.init(function () {
        // initialize canvas
        SC.canvas.init('background_canvas', 'character_canvas');
        window.addEventListener('resize', SC.landscape);
        SC.canvas.setZoom(2);
        SC.background.autoclear = true;

        // initialize on-screen touchpad
        SC.touchpad = SC.touchpad('image/arrows160.png', undefined, true);
        SC.touchpad.img.style.zIndex = 10;
        SC.touchpad.img.style.left = '1.5em';
        SC.touchpad.img.style.bottom = '1.5em';
        SC.touchpad.img.style.opacity = 0.7;
        //SC.touchpad.hide();

        // wasd
        SC.keyboard.touchpad = true;

        // hide touchpad on desktop
        if (!SC.isTouchDevice()) {
            SC.touchpad.hide();
            SC.touchpad.hide = function () { console.log('SC.touchpad.hide suppressed'); };
            SC.touchpad.show = function () { console.log('SC.touchpad.show suppressed'); };
        }
    });

    // check level fail
    setInterval(function () {
        if (SC.pause) {
            return;
        }
        if (SC.lip1) {
            SC.lip1.lip.textContent = Math.ceil(SC.level.time - SC.timeElapsed / 1000) + 's';
        }
        if (SC.level && SC.level.fail && SC.level.fail()) {
            var s, buttons;
            SC.pause = true;
            buttons = ['Menu', 'Replay'];
            s = SC.splash('Mission failed!', buttons, 'pink', null, SC.onSplashButtons, '80vw');
            s.bgClickDisable();
            SC.lip1.hide();
            if (SC.level.cleanup) {
                SC.level.cleanup();
            }
        }
    }, 500);

    // auto attack
    window.setInterval(function () {
        if (SC.attacking) {
            SC.onAttack();
        }
    }, 300);
});

