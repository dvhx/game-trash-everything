// Make all maps transient before they are loaded
"use strict";
// globals: document, window

var SC = window.SC || {};

(function () {
    var m;
    var n = 0;
    for (m in SC.maps) {
        if (SC.maps.hasOwnProperty(m)) {
            SC.maps[m].transient = true;
            n++;
        }
    }
}());


