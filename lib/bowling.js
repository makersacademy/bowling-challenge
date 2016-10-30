function Player() {
}

var rollCount = 0;

Player.prototype.roll = function(score) {
  score._previousRoll = score._mostRecentRoll;
  score._mostRecentRoll = Math.floor(Math.random()*11);
  score._currentFrame.push(score._mostRecentRoll);

  this.currentFrameStorer(score);

  return score._mostRecentRoll;
};

Player.prototype.currentFrameStorer = function (score) {
  rollCount += 1;
  if (rollCount == 2) {
    score._allFrames.push(score._currentFrame);
    score._currentFrame = [];
    rollCount = 0;
  };
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
  return this._previousRoll
};
////////////////////////////////////
