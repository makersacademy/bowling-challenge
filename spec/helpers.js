'use strict';

var bowlMany = function(n, pins) {
    for (var i = 0; i < n; i++) {
        game.bowl(pins)
    }
}

var bowlSpare = function() {
    game.bowl(5);
    game.bowl(5);
}

var bowlStrike = function() {
    game.bowl(10);
}
