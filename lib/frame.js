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

  bonusScore: function (frameNPlus1 = new Frame(), frameNPlus2 = new Frame()) {
    nextRolls = frameNPlus1.rolls.concat(frameNPlus2.rolls)
    if (this.isStrike()) {
      return nextRolls[0] + nextRolls[1] || 0
    }
    if (this.isSpare()) {
      return nextRolls[0] || 0
    }
    return 0
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

  thirdRoll: function () {
    if (this.rolls.length === 3) {
      return this.rolls[2]
    }
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
