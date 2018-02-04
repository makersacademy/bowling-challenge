const MAX_POINTS = 10;

function Frame(rolls = []) {
  this.rolls = rolls
  this.isStrike = false
  this.isSpare = false
};

Frame.prototype = {

  score: function () {
    return this.rolls.reduce((total, roll) => total + roll, 0)
  },

  addRoll: function (roll) {
    this.rolls.push(roll)
    if (roll === MAX_POINTS) { 
      this.isStrike = true 
      this.rolls.push(0)
    } else if (this.firstRoll() + this.secondRoll() === MAX_POINTS) { 
      this.isSpare = true 
    };
  },

  firstRoll: function () { return this.rolls[0] },

  secondRoll: function () { return this.rolls[1] },

};