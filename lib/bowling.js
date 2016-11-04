
var rollCount = 0;

////////////////////////////////////
function Player() {
}

Player.prototype.roll = function(score) {
  score._previousRoll = score._mostRecentRoll;
  if (rollCount == 0) {
        score._mostRecentRoll = score.knockedPins(11);
        if (score._mostRecentRoll === 10) {
          score.framePusher(score);
          return score._mostRecentRoll;
        };
      score._currentFrame.push(score._mostRecentRoll);
      rollCount += 1;
      return score._mostRecentRoll;
  } else if (rollCount == 1) {
      score._mostRecentRoll = score.knockedPins(11-score._previousRoll);
      score.framePusher(score);
      return score._mostRecentRoll;
  } else if (rollCount == 2) {
    // return score._mostRecentRoll;
  };
};

Score.prototype.framePusher = function (score) {
  score._currentFrame.push(score._mostRecentRoll);
  score._allFrames.push(score._currentFrame);
  score._currentFrame = [];
  rollCount = 0;
};

Player.prototype.currentFrameStorer = function (score) {
};

Score.prototype.knockedPins = function (modifier) {
  return Math.floor(Math.random()*modifier);
};


////////////////////////////////////
function Score() {
  // Set these to - instead of 0?
    this._mostRecentRoll = 0;
    this._previousRoll = 0;
    this._currentFrame = [];
    this._allFrames = [];
}

Score.prototype.mostRecentRoll = function () {
  return this._mostRecentRoll;
};

Score.prototype.previousRoll = function () {
  return this._previousRoll;
};

Score.prototype.allFrames = function () {
  return this._allFrames;
};


////////////////////////////////////
