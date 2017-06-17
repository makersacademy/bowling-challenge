'use script';

function Frame() {
  this.score = 0
  this.rolls = [0, 0];
}

Frame.prototype.firstRoll = function(roll) {
  this.rolls[0] = roll;
};

Frame.prototype.secondRoll = function(roll) {
  this.rolls[1] = roll;
};

module.exports = Frame;
