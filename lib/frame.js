const MAX_POINTS = 10;
const CAPACITY = 2;
const TENTH_FRAME_CAPACITY = 3;
const LAST_FRAME = 10;

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

  currentRollNo: function () {
    return this.rolls.length
  },

  isSpare: function () { 
    return this.firstRoll() + this.secondRoll() === MAX_POINTS 
  },

  isStrike: function () { 
    return this.firstRoll() === MAX_POINTS 
  },

  isFull: function (frameNumber) {
    if (frameNumber === LAST_FRAME && (this.isStrike() || this.isSpare() )) {
      return this.rolls.length >= TENTH_FRAME_CAPACITY
    }
    return this.isStrike() || this.rolls.length >= CAPACITY 
  }

};
