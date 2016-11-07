"use strict";

function Scoreboard(game) {
    this._game = game;
}

Scoreboard.prototype.total = function() {
    var r1 = this._game.recordRollOne.reduce(function(a,b) {
      a + b;
    });
    var r2 = this._game.recordRollTwo.reduce(function(a,b) {
      a + b;
    });

    return r1 + r2
};
