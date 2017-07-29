'use strict';

function ScoreCard () {
  this.card = [[]];
}

ScoreCard.prototype = {
// getCard
// updateCard(roll) - Frame.updateScoreCard
// checkBonus(isEndOfFrame, roll)
// getPreviousFrame(n)
// wasFullFrame
// wasSpareFrame
// wasStrikeFrame
// sumLastFrame

  getCard: function () {
    return this.card;
  },

  updateCard: function (rollScore) {
    if (this.wasFullFrame()) {
      this.checkBonus(true, rollScore); // add to last frame
      this.getCard().push([rollScore]);
    } else {
      this.checkBonus(false, rollScore);
      this.getPreviousFrame(1).push(rollScore);
    }
  },

  wasFullFrame: function () {
    return this.getPreviousFrame(1).length > 1;
  },

  checkBonus: function (isEndOfFrame, rollScore) {
    if (isEndOfFrame &&
      (this.wasStrikeFrame(1) || this.wasSpareFrame())) {
      this.getPreviousFrame(1).push(rollScore);
    } else if (!isEndOfFrame && this.wasStrikeFrame(2) && !this.isFirstFrame()) {
      this.getPreviousFrame(2).push(rollScore);
    }
  },

  isFirstFrame: function () {
    return this.getCard().length === 1;
  },

  getPreviousFrame: function (framesBack) {
    if (this.getCard()[0].length === 0 || // no rolls recorded yet or
        this.getCard().length === 1) { // only one frame started and
      return this.getCard()[0];
    }
    return this.getCard()[this.getCard().length - framesBack];
  },

  wasSpareFrame: function () {
    if (!this.wasStrikeFrame(1)) {
      return this.sumLastFrame() === 10;
    }
    return false;
  },

  wasStrikeFrame: function (framesBack) {
    return this.getPreviousFrame(framesBack)[0] === 10;
  },

  sumLastFrame: function () {
    var frame = this.getPreviousFrame(2);
    return sumArray(frame);
  }
};

// getPreviousFrame: function (framesBack) {
//   if (this.getCard()[0].length === 0 || // no rolls recorded yet or
//       (this.getCard().length === 1 && // only one frame started and
//       this.getCard()[0][0] !== 10)) { // 1st roll of 1st frame not strike
//     return this.getCard()[0];
//   } else if (return  && // only one frame started
//       this.getCard()[0][0] === 10) { // 1st roll was strike
//     return [];
//   }
//   return this.getCard()[this.getCard().length - framesBack];
// },
