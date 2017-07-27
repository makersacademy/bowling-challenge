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
    } else {
      this.getLastFrame().push(rollScore);
    }
  },

  isFullFrame: function () {
    return this.getLastFrame().length > 1;
  },

  getLastFrame: function () {
    return this.getCard()[this.getCard().length - 1];
  },

  isSpareFrame: function () {
    this.getLastFrame().reduce(function (total, val) { return total + val; }, 0) === 10;
  }
};
