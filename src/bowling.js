var game;

var Bowling = function () {
    "use strict";
    this.bFrame = [];
    this.game = [0];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    // go negative on the array to find previous
    // will game still add up in the same way with nested arrays?
    // var bFrame = roll;
    this.bFrame.push(roll);
};

Bowling.prototype.addUpFrame = function() {
    var frameTotal = this.bFrame.reduce(function(a, b) {
        return a + b;
    });

    return this.game.push(frameTotal);
};

Bowling.prototype.addUpGame = function() {
    var newTotal = this.game.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};

