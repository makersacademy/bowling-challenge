var game;

var Bowling = function () {
    "use strict";
    this.game = [0];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    this.game.push(roll);
};

Bowling.prototype.addUp = function() {
    var newTotal = this.game.reduce(function(a, b) {
        return a + b;
    });
    return this.total = newTotal;
};
