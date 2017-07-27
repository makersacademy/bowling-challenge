'use strict';

function ScoreCard () {
  this.card = [[]];
}

ScoreCard.prototype = {
  getCard: function () {
    return this.card;
  },

  updateCard: function (rollScore) {
    if (this.isFullFrame()) {
      this.card.push([rollScore]);
      this.checkBonus(true);
    } else {
      this.getPreviousFrame(1).push(rollScore);
      this.checkBonus(false, rollScore);
    }
  },

  checkBonus: function (isEndOfFrame, rollScore) {
    if (this.wasStrikeFrame() && isEndOfFrame) {
      this.getPreviousFrame(2).push(this.sumLastFrame());
    } else if (this.wasSpareFrame() && !isEndOfFrame) {
      this.getPreviousFrame(1).push(rollScore);
    }
  },

  isFullFrame: function () {
    return this.getPreviousFrame(1).length > 1;
  },

  getPreviousFrame: function (framesBack) {
    return this.getCard()[this.getCard().length - framesBack];
  },

  wasSpareFrame: function () {
    if (!this.wasStrikeFrame()) {
      return this.sumLastFrame() === 10;
    }
    return false;
  },

  wasStrikeFrame: function () {
    return this.getPreviousFrame(1)[0] === 10;
  },

  sumLastFrame: function () {
    return this.getPreviousFrame(1).reduce(function (total, val) { return total + val; }, 0);
  }
};
