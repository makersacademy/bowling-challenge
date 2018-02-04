function Frame() {
  this.rolls = []
  this.isStrike = false
  this.isSpare = false
};

Frame.prototype = {

  score: function () {
    return 1
  },

  addRoll: function (roll) {
    this.rolls.push(roll)
  },

  firstRoll: function () { return this.rolls[0] },
  secondRoll: function () { return this.rolls[1] },

};