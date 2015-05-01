var game;

var Bowling = function () {
    "use strict";
    this.game = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'];
};

Bowling.prototype.roll = function (roll) {
    "use strict";
    var newRollPosition = this.game.indexOf('-');
    this.game[newRollPosition] = roll;

};
