function Frame() {
  this.rollTally = [];
  this._bonusPoints = [];
  this.isBonusAwarded = false;
}

Frame.prototype = {
  addToFrame: function(roll) {
    this.rollTally.push(roll);
  },

  getScore: function() {
    var total = 0;
    this.rollTally.forEach(function(roll) {
      total += roll.pinfall;
    })
    this._bonusPoints.forEach(function(bonus) {
      total += bonus;
    })
    return total;
  },

  isStrike: function() {
    if(this.rollTally.length <= 0) return false
    return this.rollTally[0].pinfall === 10;
  },

  isSpare: function() {
    return (this.isStrike() === false) && (this.getScore() === 10);
  },

  awardBonusPoint: function(points) {
    this._bonusPoints.push(points);
    this.isBonusAwarded = true;
  }
}
