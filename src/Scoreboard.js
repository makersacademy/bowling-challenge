'use strict';

function Scoreboard() {
    this.rolls = [];
};

Scoreboard.prototype.addRoll = function (roll) {
    var maxRoll = 10;

    if (this.rolls.length % 2 === 0) {
        maxRoll = 10;
    } else {
        maxRoll = 10 - this.rolls[-1];
    };

    if ((roll >= 0) && (roll <= maxRoll)) {
        this.rolls.push(roll);
    };

    if ((this.rolls.length % 2 === 1) && (roll === 10)) {
        this.rolls.push(null);
    };


};




