'use strict';

function ScoreCard(constructorFunction = Game) {
    this._game = new constructorFunction();
}

ScoreCard.prototype.sum = function(array) {
    var accumulator = 0;
    var i;
    for (i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    return accumulator;
};

ScoreCard.prototype.total = function() {
    var accumulator = 0;
    var i;
    for (i = 0; i < 10; i++) {
        accumulator += this.sum(this._game.frames[i]._scores);
    }
    return accumulator;
};

ScoreCard.prototype.allFrames = function() {
  return this._game.frames
}

ScoreCard.prototype.calculateStrikeBonuses = function() {
  var allFrames = this._game.frames

  var i;
  for (i = 0; i < allFrames.length; i++) {
    var currentFrame = allFrames[i]
    var nextFrame = allFrames[i+1]
    var nextNextFrame = allFrames[i+2]

    var listOfEnsuingScores = []

    if (typeof nextFrame != 'undefined') {
      var j;
      for (j = 0; j < nextFrame._scores.length; j++) {
        listOfEnsuingScores.push(nextFrame._scores[j])
      }
    }

    if (typeof nextNextFrame != 'undefined') {
      var k;
      for (k = 0; k < nextNextFrame._scores.length; k++) {
        listOfEnsuingScores.push(nextNextFrame._scores[k])
      }
    }

    if (currentFrame.IsAStrike()) {
      currentFrame._strikeBonusRollsScores.push(listOfEnsuingScores[0])
      currentFrame._strikeBonusRollsScores.push(listOfEnsuingScores[1])
    }
  }
}
