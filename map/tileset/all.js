// Combined tileset
"use strict";
// globals: Image

var SC = window.SC || {}

SC.tiles = {
    "palette1": {
        "x": 0,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "palette2": {
        "x": 16,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "palette3": {
        "x": 32,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "palette4": {
        "x": 48,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "door1": {
        "x": 64,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "door2": {
        "x": 80,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "door3": {
        "x": 96,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "door4": {
        "x": 112,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "wall1": {
        "x": 128,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "wall2": {
        "x": 144,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "wall3": {
        "x": 160,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "wall4": {
        "x": 176,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "brick1": {
        "x": 192,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "brick2": {
        "x": 208,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "brick3": {
        "x": 224,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "brick4": {
        "x": 240,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "switch1left": {
        "x": 0,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch1up": {
        "x": 16,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch1right": {
        "x": 32,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "columntop": {
        "x": 48,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "bars1": {
        "x": 64,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "bars2": {
        "x": 80,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bars3": {
        "x": 96,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bars4": {
        "x": 112,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tree1": {
        "x": 128,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "tree2": {
        "x": 144,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "green3c": {
        "x": 160,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green1c": {
        "x": 176,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green7": {
        "x": 192,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green9": {
        "x": 208,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "grass1": {
        "x": 224,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "grass3": {
        "x": 240,
        "y": 16,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch2left": {
        "x": 0,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch2up": {
        "x": 16,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch2right": {
        "x": 32,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "columnbottom": {
        "x": 48,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "chest1": {
        "x": 64,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "chest2": {
        "x": 80,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "chest3": {
        "x": 96,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "chest4": {
        "x": 112,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "plant": {
        "x": 128,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "trees": {
        "x": 144,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green9c": {
        "x": 160,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green7c": {
        "x": 176,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green1": {
        "x": 192,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "green3": {
        "x": 208,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "grass2": {
        "x": 224,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "grass4": {
        "x": 240,
        "y": 32,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch3left": {
        "x": 0,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch3up": {
        "x": 16,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch3right": {
        "x": 32,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bedtop": {
        "x": 48,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pot1": {
        "x": 64,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pot2": {
        "x": 80,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pot3": {
        "x": 96,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pot4": {
        "x": 112,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "treetop": {
        "x": 128,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tree3c": {
        "x": 144,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tree1c": {
        "x": 160,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road0": {
        "x": 176,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road3c": {
        "x": 192,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road1c": {
        "x": 208,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road7": {
        "x": 224,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road9": {
        "x": 240,
        "y": 48,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch4left": {
        "x": 0,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch4up": {
        "x": 16,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "switch4right": {
        "x": 32,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bedbottom": {
        "x": 48,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "floor1": {
        "x": 64,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "floor2": {
        "x": 80,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pilebrown": {
        "x": 96,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "pilewhite": {
        "x": 112,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "treebottom": {
        "x": 128,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tree9c": {
        "x": 144,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tree7c": {
        "x": 160,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road5": {
        "x": 176,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road9c": {
        "x": 192,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road7c": {
        "x": 208,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road1": {
        "x": 224,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road3": {
        "x": 240,
        "y": 64,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "fireplace7": {
        "x": 0,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace8": {
        "x": 16,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace9": {
        "x": 32,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "shore7": {
        "x": 48,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "shore8": {
        "x": 64,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "shore9": {
        "x": 80,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "void": {
        "x": 96,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "lava1": {
        "x": 112,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "lava2": {
        "x": 128,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "sign": {
        "x": 144,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "mine": {
        "x": 160,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "fence1": {
        "x": 176,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fence2": {
        "x": 192,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "carpet": {
        "x": 208,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "carpet7": {
        "x": 224,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "carpet9": {
        "x": 240,
        "y": 80,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "fireplace4": {
        "x": 0,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace5": {
        "x": 16,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace6": {
        "x": 32,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "shore4": {
        "x": 48,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "fireplace0": {
        "x": 64,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "shore6": {
        "x": 80,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "lavawall": {
        "x": 96,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "cavewall": {
        "x": 112,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "floor3": {
        "x": 128,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "blanket": {
        "x": 144,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "throne": {
        "x": 160,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "table": {
        "x": 176,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "cabinet": {
        "x": 192,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "waterfall": {
        "x": 208,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "carpet1": {
        "x": 224,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "carpet3": {
        "x": 240,
        "y": 96,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "fireplace1": {
        "x": 0,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace2": {
        "x": 16,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "fireplace3": {
        "x": 32,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "shore1": {
        "x": 48,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "shore2": {
        "x": 64,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "shore3": {
        "x": 80,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "mud": {
        "x": 96,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "cavewalldark": {
        "x": 112,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "floor4": {
        "x": 128,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "upstairs": {
        "x": 144,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "downstairs": {
        "x": 160,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "castle": {
        "x": 176,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "town": {
        "x": 192,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "water": {
        "x": 208,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "water1": {
        "x": 224,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "water2": {
        "x": 240,
        "y": 112,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "boy-down": {
        "x": 0,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-down-walk1": {
        "x": 16,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-down-walk2": {
        "x": 32,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-down": {
        "x": 48,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-down-walk1": {
        "x": 64,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-down-walk2": {
        "x": 80,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-down": {
        "x": 96,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-down-walk1": {
        "x": 112,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-down-walk2": {
        "x": 128,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "rocks": {
        "x": 144,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "well": {
        "x": 160,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "columnbroken": {
        "x": 176,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "statue": {
        "x": 192,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": false
    },
    "tiny16_141": {
        "x": 208,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_142": {
        "x": 224,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_143": {
        "x": 240,
        "y": 128,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-left": {
        "x": 0,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-left-walk1": {
        "x": 16,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-left-walk2": {
        "x": 32,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-left": {
        "x": 48,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-left-walk1": {
        "x": 64,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-left-walk2": {
        "x": 80,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-left": {
        "x": 96,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-left-walk1": {
        "x": 112,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-left-walk2": {
        "x": 128,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "gold": {
        "x": 144,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "crystals": {
        "x": 160,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road4": {
        "x": 176,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road6": {
        "x": 192,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_157": {
        "x": 208,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_158": {
        "x": 224,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_159": {
        "x": 240,
        "y": 144,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-right": {
        "x": 0,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-right-walk1": {
        "x": 16,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-right-walk2": {
        "x": 32,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-right": {
        "x": 48,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-right-walk1": {
        "x": 64,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-right-walk2": {
        "x": 80,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-right": {
        "x": 96,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-right-walk1": {
        "x": 112,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-right-walk2": {
        "x": 128,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-dead": {
        "x": 144,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-sleep": {
        "x": 160,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road8": {
        "x": 176,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "road2": {
        "x": 192,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_173": {
        "x": 208,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_174": {
        "x": 224,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_175": {
        "x": 240,
        "y": 160,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-up": {
        "x": 0,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-up-walk1": {
        "x": 16,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "boy-up-walk2": {
        "x": 32,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-up": {
        "x": 48,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-up-walk1": {
        "x": 64,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-up-walk2": {
        "x": 80,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-up": {
        "x": 96,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-up-walk1": {
        "x": 112,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-up-walk2": {
        "x": 128,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-dead": {
        "x": 144,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "girl-sleep": {
        "x": 160,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "caveexit": {
        "x": 176,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "skeleton-dead": {
        "x": 192,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_189": {
        "x": 208,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_190": {
        "x": 224,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16_191": {
        "x": 240,
        "y": 176,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-down": {
        "x": 0,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-down-walk1": {
        "x": 16,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-down-walk2": {
        "x": 32,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-down": {
        "x": 48,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-down-walk1": {
        "x": 64,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-down-walk2": {
        "x": 80,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-down": {
        "x": 96,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-down-walk1": {
        "x": 112,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-down-walk2": {
        "x": 128,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-down": {
        "x": 144,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-down-walk1": {
        "x": 160,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-down-walk2": {
        "x": 176,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-dead": {
        "x": 192,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchyellow1": {
        "x": 208,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchyellow2": {
        "x": 224,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchyellow3": {
        "x": 240,
        "y": 192,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-left": {
        "x": 0,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-left-walk1": {
        "x": 16,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-left-walk2": {
        "x": 32,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-left": {
        "x": 48,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-left-walk1": {
        "x": 64,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-left-walk2": {
        "x": 80,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-left": {
        "x": 96,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-left-walk1": {
        "x": 112,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-left-walk2": {
        "x": 128,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-left": {
        "x": 144,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-left-walk1": {
        "x": 160,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-left-walk2": {
        "x": 176,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-dead": {
        "x": 192,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchblue1": {
        "x": 208,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchblue2": {
        "x": 224,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchblue3": {
        "x": 240,
        "y": 208,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-right": {
        "x": 0,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-right-walk1": {
        "x": 16,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-right-walk2": {
        "x": 32,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-right": {
        "x": 48,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-right-walk1": {
        "x": 64,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-right-walk2": {
        "x": 80,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-right": {
        "x": 96,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-right-walk1": {
        "x": 112,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-right-walk2": {
        "x": 128,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-right": {
        "x": 144,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-right-walk1": {
        "x": 160,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-right-walk2": {
        "x": 176,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-dead": {
        "x": 192,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchred1": {
        "x": 208,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchred2": {
        "x": 224,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchred3": {
        "x": 240,
        "y": 224,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-up": {
        "x": 0,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-up-walk1": {
        "x": 16,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "slime-up-walk2": {
        "x": 32,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-up": {
        "x": 48,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-up-walk1": {
        "x": 64,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "bat-up-walk2": {
        "x": 80,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-up": {
        "x": 96,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-up-walk1": {
        "x": 112,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "ghost-up-walk2": {
        "x": 128,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-up": {
        "x": 144,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-up-walk1": {
        "x": 160,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-up-walk2": {
        "x": 176,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "spider-dead": {
        "x": 192,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchgreen1": {
        "x": 208,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchgreen2": {
        "x": 224,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "torchgreen3": {
        "x": 240,
        "y": 240,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "tiny16-separator": {
        "x": 0,
        "y": 0,
        "tileset": "tiny16",
        "image": null,
        "walkable": true
    },
    "palette5": {
        "x": 0,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nowalk": {
        "x": 16,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": false
    },
    "barrierup": {
        "x": 32,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "antennaleft": {
        "x": 48,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "antennaright": {
        "x": 64,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "bubble": {
        "x": 80,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "captionleft": {
        "x": 96,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "caption": {
        "x": 112,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "captionright": {
        "x": 128,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "painting": {
        "x": 144,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "tombstone": {
        "x": 160,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": false
    },
    "shadow1": {
        "x": 176,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadow2": {
        "x": 192,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadow3": {
        "x": 208,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadow4": {
        "x": 224,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadow5": {
        "x": 240,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "bug-down": {
        "x": 0,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "edited-cell": {
        "x": 16,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "cabinet-up": {
        "x": 32,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": false
    },
    "list": {
        "x": 48,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "phone": {
        "x": 64,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "apple": {
        "x": 80,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "flag": {
        "x": 96,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "event": {
        "x": 112,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "place": {
        "x": 128,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "trashcan": {
        "x": 144,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": false
    },
    "deadrat": {
        "x": 160,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "emptycan": {
        "x": 176,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "applecore": {
        "x": 192,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rope": {
        "x": 208,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadown9": {
        "x": 224,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "shadow3c": {
        "x": 240,
        "y": 16,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "booksmall": {
        "x": 0,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "emerald": {
        "x": 16,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "invisible": {
        "x": 32,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "fish-up-walk1": {
        "x": 48,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "fish-up-walk2": {
        "x": 64,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "fish-up": {
        "x": 80,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "info": {
        "x": 96,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "splash1": {
        "x": 112,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "splash2": {
        "x": 128,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "unknown": {
        "x": 144,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "drop": {
        "x": 160,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "submap": {
        "x": 176,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "waterline": {
        "x": 192,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "car": {
        "x": 208,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "map": {
        "x": 224,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "dam": {
        "x": 240,
        "y": 32,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_l_ud": {
        "x": 0,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw__rud": {
        "x": 16,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_lru_": {
        "x": 32,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_lrud": {
        "x": 48,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "books1": {
        "x": 64,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "book-of-spells": {
        "x": 80,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "worms": {
        "x": 96,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "fish": {
        "x": 112,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "tomb-up": {
        "x": 128,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": false
    },
    "wellwater": {
        "x": 144,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog": {
        "x": 160,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frogwell": {
        "x": 176,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "herb-ground": {
        "x": 192,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "herb": {
        "x": 208,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "stair1": {
        "x": 224,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "stair2": {
        "x": 240,
        "y": 48,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_lr__": {
        "x": 0,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw___ud": {
        "x": 16,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_lr_d": {
        "x": 32,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "books0": {
        "x": 48,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "books2": {
        "x": 64,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "books3": {
        "x": 80,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "hole": {
        "x": 96,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "fishing_rod": {
        "x": 112,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "tomb-down": {
        "x": 128,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "crack": {
        "x": 144,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "key": {
        "x": 160,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "ladder": {
        "x": 176,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "emerald_ring": {
        "x": 192,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "ring": {
        "x": 208,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "watches": {
        "x": 224,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "pickaxe": {
        "x": 240,
        "y": 64,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_l_u_": {
        "x": 0,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw___u_": {
        "x": 16,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw__ru_": {
        "x": 32,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "hit1": {
        "x": 48,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "hit2": {
        "x": 64,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "hit3": {
        "x": 80,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "hit4": {
        "x": 96,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackright1": {
        "x": 112,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackright2": {
        "x": 128,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackup2": {
        "x": 144,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackdown1": {
        "x": 160,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "crystals-dead": {
        "x": 176,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t92": {
        "x": 192,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "waterfront-left": {
        "x": 208,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "waterfront": {
        "x": 224,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "drydown": {
        "x": 240,
        "y": 80,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_l___": {
        "x": 0,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_____": {
        "x": 16,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw__r__": {
        "x": 32,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t99": {
        "x": 48,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof7": {
        "x": 64,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof8": {
        "x": 80,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof9": {
        "x": 96,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackleft2": {
        "x": 112,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackleft1": {
        "x": 128,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackup1": {
        "x": 144,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "attackdown2": {
        "x": 160,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t107": {
        "x": 176,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t108": {
        "x": 192,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t109": {
        "x": 208,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "dry7": {
        "x": 224,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "dry3": {
        "x": 240,
        "y": 96,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw_l__d": {
        "x": 0,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw____d": {
        "x": 16,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "nw__r_d": {
        "x": 32,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t115": {
        "x": 48,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof4": {
        "x": 64,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof5": {
        "x": 80,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof6": {
        "x": 96,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "magic1": {
        "x": 112,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "magic2": {
        "x": 128,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "magic3": {
        "x": 144,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "magic4": {
        "x": 160,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t123": {
        "x": 176,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t124": {
        "x": 192,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t125": {
        "x": 208,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t126": {
        "x": 224,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t127": {
        "x": 240,
        "y": 112,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t128": {
        "x": 0,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t129": {
        "x": 16,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t130": {
        "x": 32,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t131": {
        "x": 48,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof1": {
        "x": 64,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof2": {
        "x": 80,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roof3": {
        "x": 96,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t135": {
        "x": 112,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t136": {
        "x": 128,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t137": {
        "x": 144,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t138": {
        "x": 160,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t139": {
        "x": 176,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t140": {
        "x": 192,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t141": {
        "x": 208,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t142": {
        "x": 224,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t143": {
        "x": 240,
        "y": 128,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t144": {
        "x": 0,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t145": {
        "x": 16,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t146": {
        "x": 32,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t147": {
        "x": 48,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roofwall": {
        "x": 64,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t149": {
        "x": 80,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "roofbrick": {
        "x": 96,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t151": {
        "x": 112,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t152": {
        "x": 128,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t153": {
        "x": 144,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t154": {
        "x": 160,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t155": {
        "x": 176,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t156": {
        "x": 192,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t157": {
        "x": 208,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t158": {
        "x": 224,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t159": {
        "x": 240,
        "y": 144,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t160": {
        "x": 0,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t161": {
        "x": 16,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t162": {
        "x": 32,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t163": {
        "x": 48,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t164": {
        "x": 64,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t165": {
        "x": 80,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t166": {
        "x": 96,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t167": {
        "x": 112,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t168": {
        "x": 128,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t169": {
        "x": 144,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t170": {
        "x": 160,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t171": {
        "x": 176,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t172": {
        "x": 192,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t173": {
        "x": 208,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t174": {
        "x": 224,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t175": {
        "x": 240,
        "y": 160,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t176": {
        "x": 0,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t177": {
        "x": 16,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t178": {
        "x": 32,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t179": {
        "x": 48,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t180": {
        "x": 64,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t181": {
        "x": 80,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t182": {
        "x": 96,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t183": {
        "x": 112,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t184": {
        "x": 128,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t185": {
        "x": 144,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-sleep": {
        "x": 160,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-dead": {
        "x": 176,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t188": {
        "x": 192,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-sleep": {
        "x": 208,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-dead": {
        "x": 224,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t191": {
        "x": 240,
        "y": 176,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t192": {
        "x": 0,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t193": {
        "x": 16,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t194": {
        "x": 32,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t195": {
        "x": 48,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t196": {
        "x": 64,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t197": {
        "x": 80,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t198": {
        "x": 96,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t199": {
        "x": 112,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t200": {
        "x": 128,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t201": {
        "x": 144,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-down": {
        "x": 160,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-down-walk1": {
        "x": 176,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-down-walk2": {
        "x": 192,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-down": {
        "x": 208,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-down-walk1": {
        "x": 224,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-down-walk2": {
        "x": 240,
        "y": 192,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t208": {
        "x": 0,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t209": {
        "x": 16,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t210": {
        "x": 32,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t211": {
        "x": 48,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t212": {
        "x": 64,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t213": {
        "x": 80,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t214": {
        "x": 96,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t215": {
        "x": 112,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t216": {
        "x": 128,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t217": {
        "x": 144,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-left": {
        "x": 160,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-left-walk1": {
        "x": 176,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-left-walk2": {
        "x": 192,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-left": {
        "x": 208,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-left-walk1": {
        "x": 224,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-left-walk2": {
        "x": 240,
        "y": 208,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t224": {
        "x": 0,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t225": {
        "x": 16,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t226": {
        "x": 32,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t227": {
        "x": 48,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t228": {
        "x": 64,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t229": {
        "x": 80,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t230": {
        "x": 96,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t231": {
        "x": 112,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t232": {
        "x": 128,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t233": {
        "x": 144,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-right": {
        "x": 160,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-right-walk1": {
        "x": 176,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-right-walk2": {
        "x": 192,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-right": {
        "x": 208,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-right-walk1": {
        "x": 224,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-right-walk2": {
        "x": 240,
        "y": 224,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t240": {
        "x": 0,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t241": {
        "x": 16,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t242": {
        "x": 32,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t243": {
        "x": 48,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t244": {
        "x": 64,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t245": {
        "x": 80,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t246": {
        "x": 96,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t247": {
        "x": 112,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t248": {
        "x": 128,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "t249": {
        "x": 144,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-up": {
        "x": 160,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-up-walk1": {
        "x": 176,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "rat-up-walk2": {
        "x": 192,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-up": {
        "x": 208,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-up-walk1": {
        "x": 224,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "frog-up-walk2": {
        "x": 240,
        "y": 240,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    },
    "ghosttown-separator": {
        "x": 0,
        "y": 0,
        "tileset": "ghosttown",
        "image": null,
        "walkable": true
    }
};
