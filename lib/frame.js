const MAX_POINTS = 10;

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
    if (this.firstRoll() === MAX_POINTS) { this.isStrike = true }
    else if (this.firstRoll() + this.secondRoll() === MAX_POINTS) { this.isSpare = true };
  },

  firstRoll: function () { return this.rolls[0] },
  
  secondRoll: function () { return this.rolls[1] },

};