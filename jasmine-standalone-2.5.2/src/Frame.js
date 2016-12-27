'use strict';

function Frame() {
  this.scoreCard = [];
  this.bonus = null;
}

Frame.prototype = {
  addToFrame: function(pins) {
    this.scoreCard.push(pins);
    this._createBonus();
  },

  addToBonus: function(pins) {
    if (this.bonus) {
      this.bonus.addToBonus(pins);
    };
  },

  isOver: function() {
    return this.scoreCard.length >= 2 || this.isStrike();
  },

  getTotalScore: function() {
    var sum = this._getScore();
    var bonus = this._getBonusScore();
    return this.isPointsComplete() ? sum + bonus : null;
  },

  _createBonus: function() {
    if (this.isStrike()) {
      this.bonus = new Bonus("strike");
    } else if (this.isSpare()) {
      this.bonus = new Bonus("spare");
    } else {
      null;
    }
  },

  _getScore: function() {
    return this.scoreCard.reduce((a, b) => a + b, 0);
  },

  isSpare: function() {
    return this._getScore() === 10 && this.scoreCard.length === 2;
  },

  isStrike: function() {
    return this._getScore() === 10 && this.scoreCard.length === 1;
  },

  _getBonusScore: function() {
    return this.bonus ? this.bonus.getScore() : 0;
  },

  getBonusPoints: function(index) {
    return this.bonus ? this.bonus.scoreCard[index] : null;
  },

  isPointsComplete: function() {
    return this.bonus ? this.bonus.isOver() : this.isOver();
  },

  rollNumber: function() {
    return this.scoreCard.length + 1;
  }
}
