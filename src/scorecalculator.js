'use strict'

function ScoreCalculator() {

}

ScoreCalculator.prototype.sumRoundScore = function(array) {
  var sum = array.reduce(function(a,b) {
    return a + b;
  }, 0);
  return sum
}
