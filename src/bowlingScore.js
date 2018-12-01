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
      } else if (bowl === 3) {
        f.bowl3 = score;
      }
    } return
  });
}

Score.prototype.searchFrames = function (frame, bowl) {
  for (var number = 0; number < this.frames.length; number++) {
      if (this.frames[number]['frame'] === frame) {
        if (bowl === 1) {
          return this.frames[number]['bowl1'];
        } else if (bowl === 2) {
          return this.frames[number]['bowl2'];
        } else if (bowl === 3) {
          return this.frames[number]['bowl3'];
        }
      }
  }
  return null;
}

Score.prototype.scoreCalculation = function() {
  for (var number = 0; number < this.frames.length; number++) {
    if (this._isStrikeOrSpare(number) === true) {
      if (this._isStrike(number)){
        this._strikeProcess(number)
      } else { this._spareProcess(number) }
    };
    // if (this.frames[number]['frame'] === 10) {
    //   if (this.frames[number]['bowl1'] + this.frames[number]['bowl2'] === 10 ) {
    //     this.score += 10
    //   } else { this.score += this.frames[number]['bowl1'] + this.frames[number]['bowl2'] + this.frames[number]['bowl3'] }
    // } else {
    this.score += this.frames[number]['bowl1'] + this.frames[number]['bowl2']
    // }
  }
};

Score.prototype._spareProcess = function(frame) {
  var scoreAddition = this.searchFrames(frame + 1, 1)
  this.score += scoreAddition
}

Score.prototype._strikeProcess = function(frame) {
  var scoreAddition = 0
  if (this._isStrike(frame+1) && this._isStrike(frame+2)) {
    this.score += 20
  } else if (this._isStrike(frame+1)) {
    this.score += (10 + this.searchFrames(frame + 1, 1))
  } else {
    this.score += this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2)
  }
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

Score.prototype._isStrikeOrSpare = function(frame) {
  if (this._isSpare(frame) === true || this._isStrike(frame) === true) {
    return true
  } return false
}

Score.prototype._validScore = function(frame) {
  if (this._isAdditionalBowlFrameTen(frame) === true) {
    return true
  } else if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) <= 10) {
    return true
  } return false
};

Score.prototype._frameTenScoreCalculation = function(frame) {
  if (this.searchFrames(10, 1) === 10) {
    this.score += this.searchFrames(10, 2)
  } else {
    var scoreAddition = (this.searchFrames(10, 1)) + (this.searchFrames(10, 2)) + (this.searchFrames(10, 3))
    this.score += scoreAddition
  }
};

Score.prototype._isAdditionalBowlFrameTen = function(frame) {
  if (frame === 10 && this._isStrikeOrSpareFrameTen(frame) === true) {
    return true
  } return false
};

Score.prototype._isStrikeOrSpareFrameTen = function(frame) {
  if (frame === 10 && this.searchFrames(10, 1) + this.searchFrames(10, 2) >= 10) {
    return true
  } return false
};
