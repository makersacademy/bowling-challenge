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
  var i;
  for (i = 0; i < this.allFrames().length; i++) {
    var currentFrame = this.allFrames()[i]
    if (currentFrame.IsAStrike()) {
      currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[0])
      currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[1])
    }
  }
}

ScoreCard.prototype.listEnsuingScores = function(indexOfCurrentFrame) {
  var currentFrame = this.allFrames()[indexOfCurrentFrame]
  var nextFrame = this.allFrames()[indexOfCurrentFrame+1]
  var nextNextFrame = this.allFrames()[indexOfCurrentFrame+2]
  var scoreList = []

  if (typeof nextFrame != 'undefined') {
    var j;
    for (j = 0; j < nextFrame._scores.length; j++) {
      scoreList.push(nextFrame._scores[j])
    }
  }

  if (typeof nextNextFrame != 'undefined') {
    var k;
    for (k = 0; k < nextNextFrame._scores.length; k++) {
      scoreList.push(nextNextFrame._scores[k])
    }
  }

  return scoreList
}
