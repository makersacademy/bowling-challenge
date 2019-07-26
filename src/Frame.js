'use strict';

function Frame() {
    this.rolls = [];
};

Frame.prototype.getRolls = function () {
    return this.rolls;
}
Frame.prototype.getBallScore = function(ballNumber) {
    return this.rolls[(ballNumber - 1)];
};
Frame.prototype.inputRoll = function(knockedPins) {
    this.rolls.push(knockedPins);
};
