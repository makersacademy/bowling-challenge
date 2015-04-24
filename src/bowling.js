var game;

var Bowling = function () {
    "use strict";
    this.bFrame = [];
    this.game = [0];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    if (this.bFrame.length < 2) {
        this.bFrame.push(roll);
    } else {
        // don't know yet
    }
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

