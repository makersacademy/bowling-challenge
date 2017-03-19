'use strict';

function ScoreCard() {
}

ScoreCard.prototype.wasGutterGame = function (score) {
  return score === 0 ? true : false;
};

ScoreCard.prototype.wasPerfect = function (score) {
  return score === 300 ? true : false;
};

ScoreCard.prototype.getTotalScore = function (frames) {
  var total = 0;
  frames.forEach(function(element,index,array){
    total += Number(element);
  });
  return total;
};
