'use strict';

function BowlingScorekeeper() {
  this._playerName = undefined;
  this._currentScore = 0;
  this._currentFrame = [];
  this._arrayOfFrames = [];

  // this._scoreProgression = [];
}

BowlingScorekeeper.prototype.addName = function(name) {
  this._playerName = name;
}

BowlingScorekeeper.prototype.name = function() {
  return this._playerName;
}

BowlingScorekeeper.prototype.score = function() {
  return this._currentScore;
}

BowlingScorekeeper.prototype.arrayOfFrames = function() {
  this._arrayOfFrames;
}

BowlingScorekeeper.prototype.addRollScore = function(rollScore) {
  const sum = arr => arr.reduce((a,b) => a + b, 0);
  if (this._arrayOfFrames.length === 10 && this._arrayOfFrames[9].length === 2 && sum(this._arrayOfFrames[9]) === 10) {
      this._arrayOfFrames[9].push(rollScore);
      this._calculateScore();
      return;
  } else if (this._arrayOfFrames.length === 10 && this._arrayOfFrames[9][0] === 10 && this._arrayOfFrames[9].length < 3) {
      this._arrayOfFrames[9].push(rollScore);
        this._arrayOfFrames[8].push(rollScore);
      this._calculateScore();
      return;
  } else if (this._arrayOfFrames.length === 10) {
      throw "No more goes allowed: game has finished";
  }

  this._currentFrame.push(rollScore);

  if (rollScore === 10 || this._currentFrame.length === 2) {
    this._addFrameToArrayOfFrames();
    this._clearCurrentFrame();
  }

  this._addSpareBonus();
  this._addStrikeBonus();
  this._calculateScore();
}

BowlingScorekeeper.prototype._addSpareBonus = function() {
  var array = this._arrayOfFrames;
  const sum = arr => arr.reduce((a,b) => a + b, 0);

  array.forEach(function(frame) {
    if (array[array.indexOf(frame) + 1] !== undefined && frame.length === 2 && sum(frame) === 10) {
      frame.push(array[array.indexOf(frame) + 1][0]);
    }
  });
}

BowlingScorekeeper.prototype._addStrikeBonus = function() {
  var array = this._arrayOfFrames;
  const sum = arr => arr.reduce((a,b) => a + b, 0);

  array.forEach(function(frame) {
    if (frame.length === 1 && sum(frame) === 10) {
      if (array[array.indexOf(frame) + 1] !== undefined && array[array.indexOf(frame) + 1].length === 2) {
        frame.push(array[array.indexOf(frame) + 1][0]);
        frame.push(array[array.indexOf(frame) + 1][1]);
      } else if (array[array.indexOf(frame) + 1] !== undefined && array[array.indexOf(frame) + 2] !== undefined && array[array.indexOf(frame) + 1].length === 1) {
        frame.push(array[array.indexOf(frame) + 1][0]);
        frame.push(array[array.indexOf(frame) + 2][0]);
      }
    };
  });
}

BowlingScorekeeper.prototype._calculateScore = function() {
  var scoringArray = this._arrayOfFrames.flat();
  const arrSum = arr => arr.reduce((a,b) => a + b, 0);
  this._currentScore = arrSum(scoringArray);
}

BowlingScorekeeper.prototype._clearCurrentFrame = function() {
  this._currentFrame = [];
}

BowlingScorekeeper.prototype._addFrameToArrayOfFrames = function() {
  this._arrayOfFrames.push(this._currentFrame);
}

// BowlingScorekeeper.prototype.scoreProgression = function() {
//   return this._scoreProgression;
// }
