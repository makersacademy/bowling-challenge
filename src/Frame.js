'use strict';

function Frame() {
    this.rolls = [];
};

Frame.prototype.getRolls = function () {
    return this.rolls;
}
Frame.prototype.inputRoll = function(knockedPins) {
    this.rolls.push(knockedPins);
};
