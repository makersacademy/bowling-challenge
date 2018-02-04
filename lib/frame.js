function Frame() {
  this.rolls = []
  this.isStrike = false
  this.isSpare = false
};

Frame.prototype = {

  score: function () {
    return this.rolls.reduce((accum, elem) => accum + elem, 0)
  },

  addRoll: function (roll) {
    this.rolls.push(roll)
    if (this.firstRoll() === 10) { this.isStrike = true }
    else if (this.firstRoll() + this.secondRoll() === 10) { this.isSpare = true };
  },

  firstRoll: function () { return this.rolls[0] },
  secondRoll: function () { return this.rolls[1] },

};