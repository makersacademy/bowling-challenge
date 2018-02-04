const MAX_POINTS = 10;

function Frame(rolls = []) {
  this.rolls = rolls
};

Frame.prototype = {

  score: function () {
    return this.rolls.reduce((total, roll) => total + roll, 0)
  },

  addRoll: function (roll) {
    this.rolls.push(roll)
  },

  firstRoll: function () { 
    return this.rolls[0] 
  },

  secondRoll: function () {
    return this.rolls[1]
  },

  isSpare: function () { 
    return this.firstRoll() + this.secondRoll() === MAX_POINTS 
  },

  isStrike: function () { 
    return this.firstRoll() === MAX_POINTS 
  },

};
