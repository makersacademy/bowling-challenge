'use strict';

function ScoreCard(name) {
}

ScoreCard.prototype.wasGutterGame = function (score) {
  return score === 0 ? true : false;
};

ScoreCard.prototype.wasPerfect = function (score) {
  return score === 300 ? true : false;
};
