function Frame() {
  this.rollTally = [];
  this._bonusPoints = [];
  this.isBonusAwarded = false;
  this.totalScore = this.getScore();
}

Frame.prototype = {
  addToFrame: function(roll) {
    this.rollTally.push(roll.pinfall);
    this.totalScore = this.getScore();
  },

  getScore: function() {
    var total = 0;
    this.rollTally.forEach(function(points) {
      total += points;
    })
    this._bonusPoints.forEach(function(bonus) {
      total += bonus;
    })
    return total;
  },

  isStrike: function() {
    return this.rollTally[0] === 10;
  },

  isSpare: function() {
    return (this.isStrike() === false) && (this.getScore() === 10);
  },

  awardBonusPoints: function(rollOne = 0, rollTwo = 0) {
    this._bonusPoints.push(rollOne, rollTwo);
  }
}
