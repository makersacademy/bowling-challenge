function Frame() {
  this.rolls = [];
  this.bonus = 0;
  this.bonusRollsRemaining = 0;
}

Frame.prototype.score = function () {
  var roll_1 = this.rolls[0] ? this.rolls[0] : 0;
  var roll_2 = this.rolls[1] ? this.rolls[1] : 0;
  return roll_1 + roll_2 + this.bonus;
};

Frame.prototype.roll = function (pins) {
  if (this.rolls.length === 2) {
    throw new Error('Illegal roll, frame complete');
  } else if (this.rolls[0] === 10) {
    throw new Error('Illegal roll, frame complete');
  } else {
    this.rolls.push(pins);
  }
};

Frame.prototype.getBonusRollsRemaining = function () {
  return this.bonusRollsRemaining;
};
