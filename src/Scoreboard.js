'use strict';

function Scoreboard() {
    this.rolls = [];
};

Scoreboard.prototype.addRoll = function (roll) {
    var maxRoll;

    if (this.rolls.length >= 18) {
        // this bypasses the 'null after strike rule'
        maxRoll = 10 - this.rolls[-1] || 10
    } else if (this.rolls.length % 2 === 0) {
        maxRoll = 10;
    } else {
        maxRoll = 10 - this.rolls[-1];
    };

    if ((roll >= 0) && (roll <= maxRoll)) {
        this.rolls.push(roll);
    };

    if ((this.rolls.length % 2 === 1) && (this.rolls.length <= 18) && (roll === 10)) {
        this.rolls.push(null);
    };

};




