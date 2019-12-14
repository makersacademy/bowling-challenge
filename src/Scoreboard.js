'use strict';

function Scoreboard() {
    this._rolls = [];
};

Scoreboard.prototype.rolls = function () {
    return this._rolls;
};

Scoreboard.prototype.addRoll = function(roll) {
    this._rolls.push(roll);
};

