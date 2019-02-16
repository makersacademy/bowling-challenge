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
        accumulator += this.sum(this._game.frames[i].scores);
    }
    return accumulator;
};

ScoreCard.prototype.allFrames = function() {
    return this._game.frames;
};

ScoreCard.prototype.calculateStrikeBonuses = function() {
    var i;
    for (i = 0; i < this.allFrames().length; i++) {
        var currentFrame = this.allFrames()[i];
        if (currentFrame.IsAStrike()) {
            currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[0]);
            currentFrame._strikeBonusRollsScores.push(this.listEnsuingScores(i)[1]);
        }
    }
};

ScoreCard.prototype.listEnsuingScores = function(frameIndex) {
    var scoreList = [];
    var i;
    for (i = frameIndex + 1; i < frameIndex + 3; i++) {
        if (typeof this.allFrames()[i] != 'undefined') {
          this.pushAllElements(scoreList, this.allFrames()[i].scores)
        }
    };
    return scoreList;
};


ScoreCard.prototype.pushAllElements = function(array1, array2) {
  var i;
  for (i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
  }
};
