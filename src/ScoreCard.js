'use strict';

function ScoreCard () {
  this.card = [[]];
}

ScoreCard.prototype.getCard = function () {
  return this.card;
};

ScoreCard.prototype.updateCard = function (rollScore) {
  if (this.isFullFrame()) {
    this.card.push([rollScore]);
  } else {
    this.getLastFrame().push(rollScore);
  }
};

ScoreCard.prototype.isFullFrame = function () {
  return this.getLastFrame().length > 1;
};

ScoreCard.prototype.getLastFrame = function () {
  return this.getCard()[this.getCard().length - 1];
};
