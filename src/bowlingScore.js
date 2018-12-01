'use strict'

var Score = function () {
  this.score = 0
  this.frames = [
  {frame: 1, bowl1: 0, bowl2: 0}, {frame: 2, bowl1: 0, bowl2: 0},
  {frame: 3, bowl1: 0, bowl2: 0}, {frame: 4, bowl1: 0, bowl2: 0},
  {frame: 5, bowl1: 0, bowl2: 0}, {frame: 6, bowl1: 0, bowl2: 0},
  {frame: 7, bowl1: 0, bowl2: 0}, {frame: 8, bowl1: 0, bowl2: 0},
  {frame: 9, bowl1: 0, bowl2: 0}, {frame: 10, bowl1: 0, bowl2: 0, bowl3: 0}
  ];
};

Score.prototype.scoresIntoFrames = function(frame, bowl, score) {
  if (this._validScore(frame) === false) {
    throw new Error('Invalid score');
  }
  this.frames.map(f => {
    if (f.frame === frame) {
      if (bowl === 1) {
        f.bowl1 = score;
      } else if (bowl === 2) {
        f.bowl2 = score;
      }
    } return
  });
}

Score.prototype.searchFrames = function (frame, bowl) {
  for (var i = 0; i < this.frames.length; i++) {
      if (this.frames[i]['frame'] === frame) {
        if (bowl === 1) {
          return this.frames[i]['bowl1'];
        } else if (bowl === 2) {
          return this.frames[i]['bowl2'];
        }
      }
  }
  return null;
}

Score.prototype._isStrike = function(frame) {
  if (this.searchFrames(frame, 1) === 10) {
    return true
  } return false
};

Score.prototype._isSpare = function(frame) {
  if (this.searchFrames(frame, 1) < 10) {
    if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) === 10) {
    return true
    }
  } return false
};

Score.prototype._validScore = function(frame) {
  if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) <= 10) {
    return true
  } return false

};
