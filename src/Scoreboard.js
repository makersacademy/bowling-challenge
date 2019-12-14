'use strict';

function Scoreboard() {
    this._rolls = [];
};

Scoreboard.prototype.rolls = function () {
    return this._rolls;
};

Scoreboard.prototype.addRoll = function (roll) {
    if ((roll >= 0) && (roll <= 10)) {
        this._rolls.push(roll);
    };
};



